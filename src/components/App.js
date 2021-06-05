import Register from './Register.js';
import Login from './Login.js';
import Page from './Page.js';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';
import React, { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMistake, setIsMistake] = useState(false); //TOTO отрисовать попап с ощибкой
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  useEffect(() => {
    checkToken();
  }, []);

  const handleError = (error) => console.error(error)

  function onRegister({ email, password }) {
    auth.register(password, email)
      .then((res) => {
        const email = res.email
        setUserData({
          email: email
        })
        history.push('/sign-in');
      })
      .catch(handleError)
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
          history.push('/');
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

  return (
    <div className="page">
    <Switch>
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
