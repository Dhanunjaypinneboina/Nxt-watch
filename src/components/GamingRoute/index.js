import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import GameCard from '../GameCard'
import './index.css'
import CardContext from '../../context/CardContext'
import {
  GamingContainer,
  GamingContentContainer,
  GamingHeader,
  GamesListContainer,
  Heading,
} from './styledComponents'
import Header from '../Header'
import SideNavBar from '../SideNavBar'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusContext.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusContext.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const data = await fetch(url, options)
    if (data.ok) {
      const response = await data.json()
      const updatedData = response.videos.map(eachGame => ({
        id: eachGame.id,
        title: eachGame.title,
        thumbnailUrl: eachGame.thumbnail_url,
        viewCount: eachGame.view_count,
      }))

      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusContext.success,
      })
    }
    if (data.ok !== true) {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  renderSuccessView = () => (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingVideos} = this.state

        const bgColor = isDarkTheme ? '#212121' : '#ffffff'
        const headerColor = isDarkTheme ? '#1e293b' : '#ffffff'
        const fontColor = isDarkTheme ? '#ffffff' : '#212121'
        return (
          <div>
            <GamingHeader color={headerColor}>
              <SiYoutubegaming className="game-icon" />
              <Heading color={fontColor}>Gaming</Heading>
            </GamingHeader>
            <GamesListContainer color={bgColor}>
              {gamingVideos.map(eachVideo => (
                <GameCard gameDetails={eachVideo} key={eachVideo.id} />
              ))}
            </GamesListContainer>
          </div>
        )
      }}
    </CardContext.Consumer>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble to complete your request.</p>
      <p>Please try again</p>
      <button type="button">Retry</button>
    </div>
  )

  renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" data-testid="loader" />
    </div>
  )

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSuccessView()
      case apiStatusContext.failure:
        return this.renderFailureView()
      case apiStatusContext.in_progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {gamingVideos} = this.state
    console.log(gamingVideos)
    return (
      <GamingContainer>
        <Header />
        <GamingContentContainer>
          <SideNavBar />
          {this.renderGamingVideos()}
        </GamingContentContainer>
      </GamingContainer>
    )
  }
}

export default GamingRoute
