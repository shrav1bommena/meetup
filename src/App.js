import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import UserDetailsContext from './context/UserDetailsContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {userDetails: {name: '', topic: ''}}

  addUserDetails = userDetails => {
    this.setState({
      userDetails: {name: userDetails.name, topic: userDetails.activeTopic},
    })
  }

  render() {
    const {userDetails} = this.state
    console.log(userDetails)

    return (
      <UserDetailsContext.Provider
        value={{userDetails, addUserDetails: this.addUserDetails}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </UserDetailsContext.Provider>
    )
  }
}

export default App
