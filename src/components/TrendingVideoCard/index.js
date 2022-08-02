import './index.css'
import {
  CountPublishContainer,
  VideoCard,
  CardDetails,
  TrendingHeading,
  TrendingListItem,
} from './styledComponents'
import CardContext from '../../context/CardContext'

const TrendingVideoCard = props => {
  const {cardDetails} = props
  const {thumbnailUrl, id, title, channel, viewCount, publishedAt} = cardDetails
  const {name} = channel

  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const fontColor = isDarkTheme ? '#ffffff' : '#181818'

        return (
          <VideoCard to={`videos/${id}`}>
            <TrendingListItem>
              <img
                src={thumbnailUrl}
                alt="website logo"
                className="trending-card-img"
              />
              <CardDetails>
                <TrendingHeading className="title" color={fontColor}>
                  {title}
                </TrendingHeading>
                <p className="name">{name}</p>
                <CountPublishContainer>
                  <p className="card-content">{viewCount} Views</p>
                  <p className="card-content">{publishedAt}</p>
                </CountPublishContainer>
              </CardDetails>
            </TrendingListItem>
          </VideoCard>
        )
      }}
    </CardContext.Consumer>
  )
}

export default TrendingVideoCard
