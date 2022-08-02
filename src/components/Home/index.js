import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import './index.css'
import Header from '../Header'
import SearchedVideos from '../SearchedVideos'
import CardContext from '../../context/CardContext'

import {
  HomeContainer,
  SideBarVideosContainer,
  VideosList,
  PremiumAd,
  PremiumAdContent,
  HomeBgContainer,
} from './styledComponents'

import SideNavBar from '../SideNavBar'

class Home extends Component {
  state = {
    display: 'flex',
  }

  onClickRemoveBanner = () => {
    this.setState({display: 'none'})
  }

  renderAllVideos = () => (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#ffffff'

        return (
          <HomeBgContainer color={bgColor}>
            <SearchedVideos />
          </HomeBgContainer>
        )
      }}
    </CardContext.Consumer>
  )

  render() {
    const {display} = this.state
    return (
      <HomeContainer>
        <Header />
        <SideBarVideosContainer>
          <SideNavBar />
          <VideosList>
            <PremiumAd display={display} data-testid="banner">
              <PremiumAdContent data-testid="banner">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                  className="header-watch-logo"
                />
                <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                <button type="button">GET IT NOW</button>
              </PremiumAdContent>
              <button
                type="button"
                data-testid="close"
                onClick={this.onClickRemoveBanner}
                className="banner-button"
              >
                <IoMdClose className="close-icon" />
              </button>
            </PremiumAd>
            {this.renderAllVideos()}
          </VideosList>
        </SideBarVideosContainer>
      </HomeContainer>
    )
  }
}

export default Home
