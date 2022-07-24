import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import './index.css'
import Header from '../Header'
import SearchedVideos from '../SearchedVideos'

import {
  HomeContainer,
  SideBarVideosContainer,
  VideosList,
  PremiumAd,
  PremiumAdContent,
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
    <div>
      <SearchedVideos />
    </div>
  )

  render() {
    const {display} = this.state
    return (
      <HomeContainer>
        <Header />
        <SideBarVideosContainer>
          <SideNavBar />
          <VideosList>
            <PremiumAd display={display}>
              <PremiumAdContent>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="watch logo"
                  className="header-watch-logo"
                />
                <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                <button type="button">GET IT NOW</button>
              </PremiumAdContent>
              <IoMdClose
                className="close-icon"
                onClick={this.onClickRemoveBanner}
              />
            </PremiumAd>
            {this.renderAllVideos()}
          </VideosList>
        </SideBarVideosContainer>
      </HomeContainer>
    )
  }
}

export default Home
