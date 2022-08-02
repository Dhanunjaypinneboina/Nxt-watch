import './index.css'

import {LinkItem, SavedContent, ListItem} from './styledComponents'

const SavedCard = props => {
  const {cardDetails} = props
  const {thumbnailUrl, id, title, channel, viewCount, publishedAt} = cardDetails
  const {name} = channel
  return (
    <LinkItem to={`videos/${id}`}>
      <ListItem>
        <img src={thumbnailUrl} alt="video thumbnail" className="saved-img" />
        <SavedContent>
          <p className="heading">{title}</p>
          <p>{name}</p>
          <p>{viewCount} Views</p>
          <p>{publishedAt}</p>
        </SavedContent>
      </ListItem>
    </LinkItem>
  )
}

export default SavedCard
