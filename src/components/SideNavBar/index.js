import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {SideBarItem, SideBarContainer} from './styledComponents'
import './index.css'

const SideNavBar = () => (
  <SideBarContainer>
    <div>
      <SideBarItem to="/">
        <AiFillHome className="side-nav-icons" />
        <p>Home</p>
      </SideBarItem>

      <SideBarItem to="/trending">
        <AiFillFire className="side-nav-icons" />
        <p>Trending</p>
      </SideBarItem>

      <SideBarItem to="/gaming">
        <SiYoutubegaming className="side-nav-icons" />
        <p>Gaming</p>
      </SideBarItem>

      <SideBarItem to="/saved-videos">
        <MdPlaylistAdd className="side-nav-icons" />
        <p>Saved Videos</p>
      </SideBarItem>
    </div>

    <div>
      <p className="contact-heading">CONTACT US</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="side-bar-logos"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="side-bar-logos"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="kinked in logo"
          className="side-bar-logos"
        />
        <p className="side-bar-para">
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </div>
  </SideBarContainer>
)

export default SideNavBar
