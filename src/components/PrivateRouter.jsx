import React from 'react'
import LoginPage from '../pages/Admin/LoginPage'

export const PrivateRouter = ({children, ...props}) => {
  return (
    <>
      <Route element={isLogin ? children : <LoginPage/>}></Route>
    </>
  )
}
