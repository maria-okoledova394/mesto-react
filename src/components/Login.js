import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
        <Header />
        <form className="start-form">
          <h className="start-form__title">Вход</h>
            <input id="email-input" className="start-form__input" placeholder="Email" />
            <input id="password-input" className="start-form__input" placeholder="Пароль" />
            <button type="submit" className="start-form__button">Войти</button>
        </form>
        </>
    );
  }
  
  export default Login;