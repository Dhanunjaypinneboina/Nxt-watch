import './index.css'

import {
  HomeListContainer,
  VideoCardContainer,
  ViewsYearContainer,
  CardDetailsContainer,
  Title,
} from './styledComponents'

import CardContext from '../../context/CardContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = videoDetails
  const {profileImageUrl, name} = channel

  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const fontColor = isDarkTheme ? '#f8fafc' : '#0f0f0f'
        return (
          <VideoCardContainer to={`videos/${id}`}>
            <HomeListContainer>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="card-image"
              />
              <CardDetailsContainer>
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile-img"
                />
                <div>
                  <Title className="title" color={fontColor}>
                    {title}
                  </Title>
                  <p>{name}</p>
                  <ViewsYearContainer>
                    <p className="views-count">{viewCount} Views</p>
                    <p className="published-at">{publishedAt}</p>
                  </ViewsYearContainer>
                </div>
              </CardDetailsContainer>
            </HomeListContainer>
          </VideoCardContainer>
        )
      }}
    </CardContext.Consumer>
  )
}
export default VideoCard
