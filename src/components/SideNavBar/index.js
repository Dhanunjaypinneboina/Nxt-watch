import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {SideBarItem, SideBarContainer} from './styledComponents'
import './index.css'

const SideNavBar = () => (
  <SideBarContainer>
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
  </SideBarContainer>
)

export default SideNavBar
