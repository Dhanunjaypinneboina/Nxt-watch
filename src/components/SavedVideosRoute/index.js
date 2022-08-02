import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'

import './index.css'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import CardContext from '../../context/CardContext'
import {
  NoSavedContainer,
  SavedContainer,
  SavedBannerContainer,
  NoSaveImage,
  SavedVideos,
  SaveBanner,
} from './styledComponents'
import SavedCard from '../SavedCard'

class SavedVideosRoute extends Component {
  renderVideosStatus = () => (
    <CardContext.Consumer>
      {value => {
        const {savedVideos} = value
        const length = savedVideos.length === 0

        return (
          <SavedBannerContainer>
            {length ? (
              <NoSaveImage>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                  className="no-save-img"
                />
                <h1>No saved videos found</h1>
                <p>You can save your videos with watching them</p>
              </NoSaveImage>
            ) : (
              <div>
                <SaveBanner>
                  <AiFillFire className="trending-icon" />
                  <h1>Saved Videos</h1>
                </SaveBanner>
                <SavedVideos>
                  {savedVideos.map(eachItem => (
                    <SavedCard cardDetails={eachItem} key={eachItem.id} />
                  ))}
                </SavedVideos>
              </div>
            )}
          </SavedBannerContainer>
        )
      }}
    </CardContext.Consumer>
  )

  render() {
    return (
      <SavedContainer>
        <Header />

        <NoSavedContainer>
          <SideNavBar />
          {this.renderVideosStatus()}
        </NoSavedContainer>
      </SavedContainer>
    )
  }
}

export default SavedVideosRoute
