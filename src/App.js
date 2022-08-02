import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import LoginForm from './components/LoginForm'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFoundRoute from './components/NotFoundRoute'
import CardContext from './context/CardContext'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
  }

  addToSavedList = product => {
    const {savedVideos} = this.state
    const video = savedVideos.find(eachVideo => eachVideo.id === product.id)

    if (video) {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos],
      }))
    } else {
      this.setState({savedVideos: [...savedVideos, product]})
    }
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {savedVideos, isDarkTheme} = this.state

    return (
      <CardContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          addToSavedList: this.addToSavedList,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </CardContext.Provider>
    )
  }
}

export default App
