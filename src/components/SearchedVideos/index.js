import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import VideoCard from '../VideoCard'
import './index.css'
import {
  VideosListContainer,
  NoSearchResultContainer,
  FailureView,
  Spinner,
} from './styledComponents'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'PROGRESS',
}

class SearchedVideos extends Component {
  state = {
    userInput: '',
    userValue: '',
    apiStatus: apiStatusContext.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusContext.in_progress})
    const {userValue} = this.state

    const jwtToken = Cookies.get('JWT_TOKEN')

    const Url = `https://apis.ccbp.in/videos/all?search=${userValue}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const data = await fetch(Url, options)

    if (data.ok) {
      const response = await data.json()
      const updatedData = response.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))

      this.setState({
        videosData: updatedData,
        apiStatus: apiStatusContext.success,
      })
    }
    if (data.ok !== true) {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  renderSuccessViewOfList = () => {
    const {videosData} = this.state
    const noSearchResult = videosData.length === 0

    return (
      <div>
        {noSearchResult ? (
          <NoSearchResultContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-videos-img"
            />
            <h1>NoSearch results found</h1>
            <p className="">Try different words or remove search filter</p>
            <button type="button" onClick={this.getVideosData}>
              Retry
            </button>
          </NoSearchResultContainer>
        ) : (
          <VideosListContainer>
            {videosData.map(eachItem => (
              <VideoCard videoDetails={eachItem} key={eachItem.id} />
            ))}
          </VideosListContainer>
        )}
      </div>
    )
  }

  renderFailureView = () => (
    <FailureView>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having trouble to complete your request.</p>
      <p>Please try again</p>
      <button type="button">Retry</button>
    </FailureView>
  )

  renderLoaderView = () => (
    <Spinner>
      <Loader type="ThreeDots" />
    </Spinner>
  )

  onChangeUserInput = event => this.setState({userInput: event.target.value})

  renderVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSuccessViewOfList()
      case apiStatusContext.failure:
        return this.renderFailureView()
      case apiStatusContext.in_progress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  onClickSearchButton = () => {
    const {userInput} = this.state
    this.setState({userValue: userInput}, this.getVideosData)
  }

  onEnterSearchInput = event => {
    const {userInput} = this.state
    if (event.key === 'Enter') {
      this.setState({userValue: userInput}, this.getVideosData)
    }
  }

  render() {
    const {onClickSearch, userInput} = this.state
    console.log(onClickSearch)
    return (
      <>
        <div className="input-search-el">
          <input
            type="search"
            onChange={this.onChangeUserInput}
            value={userInput}
            onKeyDown={this.onEnterSearchInput}
          />
          <button type="button">
            <BiSearch onClick={this.onClickSearchButton} />
          </button>
        </div>
        {this.renderVideosList()}
      </>
    )
  }
}

export default SearchedVideos
