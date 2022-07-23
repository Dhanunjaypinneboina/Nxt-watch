import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import VideoCard from '../VideoCard'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'PROGRESS',
}

class SearchedVideos extends Component {
  state = {
    userInput: '',
    apiStatus: apiStatusContext.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusContext.in_progress})
    const {userInput} = this.state
    const jwtToken = Cookies.get('JWT_TOKEN')

    const Url = `https://apis.ccbp.in/videos/all?search=${userInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const data = await fetch(Url, options)

    if (data.ok) {
      const response = await data.json()
      const updatedData = response.videos.map(eachItem => ({
        id: eachItem.id,
      }))

      this.setState({
        videosData: updatedData,
        apiStatus: apiStatusContext.success,
      })
    }
  }

  renderSuccessViewOfList = () => {
    const {videosData} = this.state
    console.log(videosData)
    return <VideoCard />
  }

  onChangeUserInput = event => this.setState({userInput: event.target.value})

  renderVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContext.success:
        return this.renderSuccessViewOfList()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="input-search-el">
          <input type="search" onChange={this.onChangeUserInput} />
          <button type="button">
            <BiSearch />
          </button>
        </div>
        {this.renderVideosList()}
      </>
    )
  }
}

export default SearchedVideos
