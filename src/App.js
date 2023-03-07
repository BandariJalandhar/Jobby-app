import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import LoginForm from './Components/LoginForm'
import HomePage from './Components/HomePage'
import Jobs from './Components/Jobs'
import ProtectedRoute from './Components/ProtectedRoute'
import JobItemDetails from './Components/JobItemDetails'
import NotFound from './Components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={HomePage} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
