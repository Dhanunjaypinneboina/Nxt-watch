import {Route} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

// Replace your code here
const App = () => (
  <div>
    <Route path="/login" component={LoginForm} />
    <Route path="/" component={Home} />
  </div>
)

export default App
