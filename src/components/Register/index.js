import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import UserDetailsContext from '../../context/UserDetailsContext'

import './index.css'

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

// on clicking submit store username,category then redirect to home route
// then show username and category in home route

class Register extends Component {
  state = {name: '', activeTopic: topicsList[0].id, showError: false}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  changeTopic = event => {
    this.setState({activeTopic: event.target.value})
  }

  onSubmit = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, activeTopic, showError} = this.state

    return (
      <UserDetailsContext.Consumer>
        {value => {
          const {addUserDetails} = value

          const onSubmitForm = event => {
            event.preventDefault()
            if (name === '') {
              this.onSubmit()
            } else {
              const {history} = this.props
              const topic = topicsList.filter(
                eachTopic => eachTopic.id === activeTopic,
              )
              // console.log(topic)

              addUserDetails({name, activeTopic: topic[0].displayText})
              history.replace('/')
            }
          }

          return (
            <div>
              <Header />
              <div className="register-body">
                <div className="register-image-container">
                  <img
                    className="register-image"
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </div>

                <div className="register-form-container">
                  <h1 className="register-title">Let us join</h1>
                  <form onSubmit={onSubmitForm}>
                    <div className="input-container">
                      <label className="input-label" htmlFor="name">
                        NAME
                      </label>
                      <input
                        onChange={this.onChangeName}
                        className="input-box"
                        value={name}
                        id="name"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="input-container">
                      <label className="input-label" htmlFor="topics">
                        TOPICS
                      </label>
                      <select
                        onChange={this.changeTopic}
                        className="input-box"
                        id="topics"
                        value={activeTopic}
                      >
                        {topicsList.map(eachTopic => (
                          <option key={eachTopic.id} value={eachTopic.id}>
                            {eachTopic.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button className="register-submit-button" type="submit">
                      Register Now
                    </button>
                    {showError && (
                      <p className="error-text">Please enter your name</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </UserDetailsContext.Consumer>
    )
  }
}

export default Register
