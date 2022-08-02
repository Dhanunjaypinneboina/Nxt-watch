import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {
  InputLabelContainer,
  FormContainer,
  LoginFormContainer,
  Label,
  Input,
  ShowPasswordContainer,
  LoginButton,
} from './styledComponents'
import './index.css'
import CardContext from '../../context/CardContext'

class LoginForm extends Component {
  state = {
    isShowPassword: false,
    username: '',
    password: '',
    errorMsg: '',
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  showErrorMsg = errorMsg => this.setState({errorMsg})

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const URL = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const fetchData = await fetch(URL, options)
    const response = await fetchData.json()
    if (fetchData.ok) {
      this.onSubmitSuccess(response.jwt_token)
    } else {
      this.showErrorMsg(response.error_msg)
    }
  }

  onShowHidePassword = () =>
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))

  renderLoginForm = () => {
    const {isShowPassword, errorMsg} = this.state

    return (
      <CardContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const changeLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <FormContainer
              onSubmit={this.onSubmitForm}
              backgroundColor={isDarkTheme}
            >
              <img src={changeLogo} alt="website logo" className="watch-logo" />

              <InputLabelContainer>
                <Label htmlFor="username" color={isDarkTheme}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="username"
                  onChange={this.onChangeUsername}
                />
              </InputLabelContainer>

              <InputLabelContainer>
                <Label htmlFor="password" color={isDarkTheme}>
                  PASSWORD
                </Label>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  id="password"
                  onChange={this.onChangePassword}
                />
              </InputLabelContainer>

              <ShowPasswordContainer>
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={this.onShowHidePassword}
                />
                <Label
                  htmlFor="checkbox"
                  checked={isShowPassword}
                  color={isDarkTheme}
                >
                  Show Password
                </Label>
              </ShowPasswordContainer>

              <LoginButton type="submit">Login</LoginButton>
              <p>{errorMsg}</p>
            </FormContainer>
          )
        }}
      </CardContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <LoginFormContainer>{this.renderLoginForm()}</LoginFormContainer>
  }
}

export default LoginForm
