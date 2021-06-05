import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import Page from './Page.js';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';
import React, { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 /* const [successRegistration, setSuccessRegistration] = useState(false);
  const [faildRegistration, setFaildRegistration] = useState(false);*/
  const [isMistake, setIsMistake] = useState(false); //TOTO отрисовать попап с ощибкой
  const [popup, setPopup] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  useEffect(() => {
    checkToken();
  }, []);

  function handleError (error) {
    console.error(error)
  }

  function onRegister({ email, password }) {
    auth.register(password, email)
      .then((res) => {
        const email = res.email
        setUserData({
          email: email
        })
        setIsMistake(false)
        history.push('/sign-in')
      })
      .catch((error) => {
        handleError(error)
        setIsMistake(true)
      })
      .finally(() => {
        setPopup(true)
      })
  }

  function onLogin({ email, password }) {
    auth.authorize(password, email)
      .then((res) => {
        console.log(res)
        const token = res.token
        if (token) {
          console.log(`успешная авторизация ${token}`);
          localStorage.setItem('token', token)
          setLoggedIn(true)
          history.push('/')
        }
      })
      .catch(handleError)
  }

  function checkToken() {
    let token = localStorage.getItem('token')
    
    if (token) {
      auth.getContent(token)
        .then((res) => {
          if (res){
            setUserData ({
              email: res.email
            })
            setLoggedIn(true)
            history.push("/")
          }
        })
        .catch(handleError)
    }
  }

  function onSignOut() {
    setUserData({
      email: '',
      password: ''
    })
    setLoggedIn(false)
    localStorage.removeItem('token')
  }

  function onCloseStartPopup() {
    setPopup(false)
  }

  return (
    <div className="page">
    <Switch>
      {popup && <InfoTooltip isMistake={isMistake} onClose={onCloseStartPopup} />}
      <Route path="/sign-up">
        <Register onRegister={onRegister} />
      </Route>
      <Route path="/sign-in">
        <Login onLogin={onLogin} />
      </Route>
      <ProtectedRoute path="/" loggedIn={loggedIn} userData={userData} component={Page} onSignOut={onSignOut} />
    </Switch>
    </div>
  )
}

export default App;
