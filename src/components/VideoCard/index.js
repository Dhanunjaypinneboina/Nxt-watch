import './index.css'

import {
  VideoCardContainer,
  ViewsYearContainer,
  CardDetailsContainer,
} from './styledComponents'

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
    <VideoCardContainer to={`videos/${id}`}>
      <img src={thumbnailUrl} alt={id} className="card-image" />
      <CardDetailsContainer>
        <img src={profileImageUrl} alt={name} className="profile-img" />
        <div>
          <p className="title">{title}</p>
          <p>{name}</p>
          <ViewsYearContainer>
            <p className="views-count">{viewCount} Views</p>
            <p className="published-at">{publishedAt}</p>
          </ViewsYearContainer>
        </div>
      </CardDetailsContainer>
    </VideoCardContainer>
  )
}
export default VideoCard
