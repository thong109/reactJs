import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
})

export const ContextProvider = ({children}) => {
  const [currentUser, _setCurrentUser] = useState(localStorage.getItem('currentUser') || {})
  const [userToken, _setUserToken] = useState(localStorage.getItem('userToken') || '')

  const setUserToken = (token) => {
    if(token) {
      localStorage.setItem('userToken', token)
    } else {
      localStorage.removeItem('userToken')
    }
    _setUserToken(token)
  }

  const setCurrentUser = (user) => {
    if(user) {
      localStorage.setItem('currentUser', user)
    } else {
      localStorage.removeItem('currentUser')
    }
    _setCurrentUser(user)
  }

  return (
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const userStateContext = () => useContext(StateContext)
