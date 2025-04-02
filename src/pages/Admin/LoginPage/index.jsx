import { memo, useState } from "react";
import './LoginPage.scss'
import axiosClient from "../../../config/axios";
import { userStateContext } from "../../../contexts/ContextProvider";

const LoginPage = () => {
  const { setCurrentUser, setUserToken} = userStateContext();

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [error, setError ] = useState({__html: ''})

  const handleChangeInput = (e) => {
    const newState = {...form}
    newState[e.target.name] = e.target.value
    setForm({
      ...newState
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post('/login', form)
    .then(res => {
      setCurrentUser(res.user)
      setUserToken(res.token)
    })
    .catch(err => {
      if (err.response) {
        const finalErrors = Object.values(err.response.data.errors).reduce((accum, next) => [...next, ...accum], [])
          setError({__html: finalErrors.join('<br>')});
        }
      })
    // .finally(() => {
    //   console.log('finally');
    // })
  }

  return (
    <>
      <div className="container container-login">
        <div className="wrapper">
          <h1 className="text-center text-title">Login</h1>
          {
            error.__html && <div className="alert alert-danger" role="alert" dangerouslySetInnerHTML={error}></div>
          }
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" autoComplete="email" onChange={handleChangeInput} required value={form.email}/>
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" autoComplete="current-password" onChange={handleChangeInput} required value={form.password}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(LoginPage);
