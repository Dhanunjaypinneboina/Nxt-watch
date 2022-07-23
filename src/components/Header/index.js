import {BsMoon} from 'react-icons/bs'
import {HeaderContainer, HeaderContext} from './styledComponents'
import './index.css'

const Header = () => (
  <HeaderContainer>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="watch logo"
      className="header-watch-logo"
    />
    <HeaderContext>
      <BsMoon size="35" />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
        alt="profile"
        className="profile"
      />
      <button type="button">Logout</button>
    </HeaderContext>
  </HeaderContainer>
)

export default Header
