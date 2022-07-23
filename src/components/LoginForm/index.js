import Cookies from 'js-cookie'

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
    Cookies.set('JWT_TOKEN', jwtToken, {expires: 30})
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
      <FormContainer onSubmit={this.onSubmitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="light theme"
          className="watch-logo"
        />

        <InputLabelContainer>
          <Label htmlFor="username">USERNAME</Label>
          <Input type="text" id="username" onChange={this.onChangeUsername} />
        </InputLabelContainer>

        <InputLabelContainer>
          <Label htmlFor="password">PASSWORD</Label>
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
          <label htmlFor="checkbox" checked={isShowPassword}>
            Show Password
          </label>
        </ShowPasswordContainer>

        <LoginButton type="submit">Login</LoginButton>
        <p>{errorMsg}</p>
      </FormContainer>
    )
  }

  render() {
    return <LoginFormContainer>{this.renderLoginForm()}</LoginFormContainer>
  }
}

export default LoginForm
