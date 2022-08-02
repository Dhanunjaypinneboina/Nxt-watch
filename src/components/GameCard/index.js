import {Link} from 'react-router-dom'
import './index.css'
import {ListItem} from './styledComponents'

const GameCard = props => {
  const {gameDetails} = props
  const {thumbnailUrl, id, title, viewCount} = gameDetails

  return (
    <ListItem>
      <Link to={`videos/${id}`} className="game-link">
        <img src={thumbnailUrl} alt="video thumbnail" className="game-img" />
        <p className="game-title">{title}</p>
        <p className="game-view-count">{viewCount} Watching Worldwide</p>
      </Link>
    </ListItem>
  )
}
export default GameCard
