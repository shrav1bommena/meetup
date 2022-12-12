import {Link} from 'react-router-dom'

import Header from '../Header'
import UserDetailsContext from '../../context/UserDetailsContext'

import './index.css'

const Home = props => {
  const changeRoute = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <UserDetailsContext.Consumer>
      {value => {
        const {userDetails} = value
        console.log(userDetails.length)

        if (userDetails.name === '') {
          return (
            <div>
              <Header />
              <div className="home-body">
                <h1 className="home-title">Welcome to Meetup</h1>
                <p className="home-description">
                  Please register for the topic
                </p>
                <Link to="/register">
                  <button
                    className="home-register-button"
                    onClick={changeRoute}
                    type="button"
                  >
                    Register
                  </button>
                </Link>
                <img
                  className="home-image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            </div>
          )
        }
        return (
          <div>
            <Header />
            <div className="home-body">
              <h1 className="home-username">Hello {userDetails.name}</h1>
              <p className="home-user-welcome">
                Welcome to {userDetails.topic}
              </p>
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </div>
        )
      }}
    </UserDetailsContext.Consumer>
  )
}

export default Home
