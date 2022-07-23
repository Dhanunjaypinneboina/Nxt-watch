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
} from './styledComponents'

import SideNavBar from '../SideNavBar'

class Home extends Component {
  renderAllVideos = () => (
    <div>
      <SearchedVideos />
    </div>
  )

  render() {
    return (
      <HomeContainer>
        <Header />
        <SideBarVideosContainer>
          <SideNavBar />
          <VideosList>
            <PremiumAd>
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="watch logo"
                  className="header-watch-logo"
                />
                <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                <button type="button">GET IT NOW</button>
              </>
              <IoMdClose className="close-icon" />
            </PremiumAd>
            {this.renderAllVideos()}
          </VideosList>
        </SideBarVideosContainer>
      </HomeContainer>
    )
  }
}

export default Home
