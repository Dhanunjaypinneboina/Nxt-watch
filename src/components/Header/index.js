import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import CardContext from '../../context/CardContext'

import {
  HeaderContainer,
  HeaderContext,
  PopupContainer,
  LogoButton,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CardContext.Consumer>
      {value => {
        const {onChangeTheme, isDarkTheme} = value
        const onClickChangeTheme = () => {
          onChangeTheme()
        }

        const changeLogo = isDarkTheme ? (
          <FiSun size="35" />
        ) : (
          <BsMoon size="35" />
        )

        return (
          <HeaderContainer>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                className="header-watch-logo"
              />
            </Link>

            <HeaderContext>
              <LogoButton type="button" onClick={onClickChangeTheme}>
                {changeLogo}
              </LogoButton>

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
                className="profile"
              />

              <Popup
                modal
                trigger={
                  <button
                    type="button"
                    className="trigger-button"
                    data-testid="theme"
                  >
                    Logout
                  </button>
                }
              >
                {close => (
                  <PopupContainer>
                    <div>
                      <p className="popup-text">
                        Are you sure, you want to logout
                      </p>
                    </div>
                    <button
                      type="button"
                      className="trigger-cancel-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={onClickLogoutButton}
                    >
                      Confirm
                    </button>
                  </PopupContainer>
                )}
              </Popup>
            </HeaderContext>
          </HeaderContainer>
        )
      }}
    </CardContext.Consumer>
  )
}

export default withRouter(Header)
