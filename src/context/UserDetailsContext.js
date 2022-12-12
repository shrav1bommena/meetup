import React from 'react'

const UserDetailsContext = React.createContext({
  userDetails: {},
  addUserDetails: () => {},
})

export default UserDetailsContext
