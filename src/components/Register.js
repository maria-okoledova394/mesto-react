import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
        <Header />
        <form className="start-form">
          <h className="start-form__title">Регистрация</h>
            <input id="email-input" className="start-form__input" placeholder="Email" />
            <input id="password-input" className="start-form__input" placeholder="Пароль" />
            <button type="submit" className="start-form__button">Зарегистрироваться</button>
        </form>

        <div className="start__signin">
          <p>Уже зарегистрированы? <a to="" className="start__login-link">Войти</a></p>
        </div>
        </>
    );
  }
  
  export default Register;