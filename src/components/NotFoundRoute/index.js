import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {NotFoundContainer, Image, NotFoundShow} from './styledComponents'

const NotFoundRoute = () => (
  <div>
    <Header />
    <NotFoundContainer>
      <SideNavBar />
      <NotFoundShow>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you request could not found.</p>
      </NotFoundShow>
    </NotFoundContainer>
  </div>
)

export default NotFoundRoute
