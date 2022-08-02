import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import TrendingVideoCard from '../TrendingVideoCard'
import CardContext from '../../context/CardContext'

import './index.css'

import {
  TrendingRouteContainer,
  TrendingVideosContainer,
  TrendingHeading,
  TrendingVideoDetailsBg,
  TrendingBg,
  Heading,
} from './styledComponents'
import Header from '../Header'
import SideNavBar from '../SideNavBar'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_Progress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusContext.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusContext.in_Progress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const data = await fetch(url, options)

    if (data.ok) {
      const response = await data.json()
      const updatedData = response.videos.map(eachTrending => ({
        id: eachTrending.id,
        title: eachTrending.title,
        thumbnailUrl: eachTrending.thumbnail_url,
        channel: {
          name: eachTrending.channel.name,
          profileImageUrl: eachTrending.channel.profile_image_url,
        },
        viewCount: eachTrending.view_count,
        publishedAt: eachTrending.published_at,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusContext.success,
      })
    }
    if (data.ok !== true) {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  renderSuccessViewsOfVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <ul>
        {trendingVideosList.map(each => (
          <TrendingVideoCard cardDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

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

  renderLoaderView = () => (
    <div>
      <Loader type="ThreeDots" />
    </div>
  )

  renderApiStatusVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSuccessViewsOfVideos()
      case apiStatusContext.failure:
        return this.renderFailureView()
      case apiStatusContext.in_Progress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  renderTrendingAllVideos = () => (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
        const headerColor = isDarkTheme ? '#1e293b' : '#ffffff'
        const fontColor = isDarkTheme ? '#ffffff' : '#212121'
        return (
          <TrendingVideoDetailsBg>
            <TrendingHeading color={headerColor}>
              <AiFillFire className="trending-icon" />
              <Heading color={fontColor}>Trending</Heading>
            </TrendingHeading>
            <TrendingBg color={bgColor} data-testid="trending">
              {this.renderApiStatusVideos()}
            </TrendingBg>
          </TrendingVideoDetailsBg>
        )
      }}
    </CardContext.Consumer>
  )

  render() {
    const {trendingVideosList} = this.state
    console.log(trendingVideosList)
    return (
      <TrendingRouteContainer>
        <Header />
        <TrendingVideosContainer>
          <SideNavBar />
          {this.renderTrendingAllVideos()}
        </TrendingVideosContainer>
      </TrendingRouteContainer>
    )
  }
}

export default TrendingRoute
