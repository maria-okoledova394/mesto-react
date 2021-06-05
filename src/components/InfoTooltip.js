import React from 'react';
import success_registration_mark from '../images/success_registration_mark.svg'

function InfoTooltip () {
    return (
        <>
      <div className="popup">
        <form className="popup__form popup__container popup__container_type_info">
          <img className="popup__image" src={success_registration_mark}></img>
          <h2 className="popup__title popup__title_function_info">Вы успешно зарегистрировались!</h2>
        </form>
      </div>  
        </>
    );
  }
  
  export default InfoTooltip ;