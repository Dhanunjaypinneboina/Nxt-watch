import {Component} from 'react'
import './index.css'
import ReactPlayer from 'react-player'
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import CardContext from '../../context/CardContext'

import {
  VideoItemContainer,
  VideoItemDetailsContainer,
  DetailsContainer,
  PlayerDetails,
  PublishedDate,
  CommentContainer,
  LikeDisLikeSaveContainer,
  ViewPublished,
  PlayerTitle,
  PlayerDescription,
  SavedButton,
  VideoDetails,
  LogoName,
  Subscribers,
  VideoDetailsContainer,
  Text,
} from './styledComponents'

import Header from '../Header'
import SideNavBar from '../SideNavBar'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusContext.initial,
    isVideoSaved: false,
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusContext.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const data = await fetch(url, options)
    if (data.ok) {
      const response = await data.json()
      const updatedData = {
        id: response.video_details.id,
        title: response.video_details.title,
        videoUrl: response.video_details.video_url,
        thumbnailUrl: response.video_details.thumbnail_url,

        viewCount: response.video_details.view_count,
        publishedAt: response.video_details.published_at,
        description: response.video_details.description,
        channel: {
          name: response.video_details.channel.name,
          profileImageUrl: response.video_details.channel.profile_image_url,
          subscriberCount: response.video_details.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusContext.success,
      })
    }
    if (data.ok !== true) {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  renderSuccessViewOfVideo = () => (
    <CardContext.Consumer>
      {value => {
        const {videoDetails} = this.state
        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          channel,
        } = videoDetails
        const {profileImageUrl, name, subscriberCount} = channel
        const {isVideoSaved, isLike, isDisLike} = this.state
        const {addToSavedList, isDarkTheme} = value

        const onClickSaveButton = () => {
          this.setState(prevState => ({
            isVideoSaved: !prevState.isVideoSaved,
          }))
          addToSavedList({...videoDetails})
        }

        const onClickToggleLike = () => {
          this.setState(prevState => ({
            isLike: !prevState.isLike,
            isDisLike: false,
          }))
        }

        const onClickToggleDisLike = () => {
          this.setState(prevState => ({
            isDisLike: !prevState.isDisLike,
            isLike: false,
          }))
        }

        const likeClass = isLike ? '#2563eb' : '#64748b'
        const dislikeClass = isDisLike ? '#2563eb' : '#64748b'
        const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
        const textColor = isDarkTheme ? '#f1f5f9' : '#181818'

        const likeIcon = isLike ? <AiFillLike /> : <AiOutlineLike />
        const dislikeIcon = isDisLike ? <AiFillDislike /> : <AiOutlineDislike />
        return (
          <VideoItemContainer color={bgColor} data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} controls width="100%" height="450px" />
            <PlayerTitle color={textColor}>{title}</PlayerTitle>
            <PlayerDetails>
              <ViewPublished>
                <p className="color">{viewCount} Views</p>
                <PublishedDate>{publishedAt}</PublishedDate>
              </ViewPublished>
              <LikeDisLikeSaveContainer>
                <CommentContainer
                  type="button"
                  onClick={onClickToggleLike}
                  color={likeClass}
                >
                  {likeIcon}
                  <Text color={likeClass}>Like</Text>
                </CommentContainer>
                <CommentContainer
                  type="button"
                  onClick={onClickToggleDisLike}
                  color={dislikeClass}
                >
                  {dislikeIcon}
                  <Text color={likeClass}>DisLike</Text>
                </CommentContainer>
                <CommentContainer type="button" onClick={onClickSaveButton}>
                  <SavedButton>
                    <RiMenuAddLine />
                    {isVideoSaved ? (
                      <p className="save-color">Saved</p>
                    ) : (
                      <p className="save-color">Save</p>
                    )}
                  </SavedButton>
                </CommentContainer>
              </LikeDisLikeSaveContainer>
            </PlayerDetails>
            <hr />
            <VideoDetails>
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="link-logo"
              />
              <VideoDetailsContainer>
                <LogoName color={textColor}>{name}</LogoName>
                <Subscribers>{subscriberCount} subscribers</Subscribers>
                <PlayerDescription color={textColor}>
                  {description}
                </PlayerDescription>
              </VideoDetailsContainer>
            </VideoDetails>
          </VideoItemContainer>
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
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <p>Please try again</p>
      <button type="button" onClick={this.getVideoDetails}>
        Retry
      </button>
    </div>
  )

  renderLoaderView = () => (
    <div>
      <Loader type="ThreeDots" />
    </div>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSuccessViewOfVideo()
      case apiStatusContext.failure:
        return this.renderFailureView()
      case apiStatusContext.in_progress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemDetailsContainer>
        <Header />
        <DetailsContainer>
          <SideNavBar />
          {this.renderVideoDetails()}
        </DetailsContainer>
      </VideoItemDetailsContainer>
    )
  }
}

export default VideoItemDetails
