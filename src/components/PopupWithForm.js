import React from 'react';
// TODO добавить атрибут name тегу form

function PopupWithForm({ title, name }) {
    return (
      <div className={`popup popup_function_${name}`}>
        <form className={`popup__form popup__container popup__container_function_${name} popup__container_type_form`} noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className={`popup__title popup__title_function_${name}`}>{title}</h2>
          <button className={`popup__button popup__button-save popup__button-save_function_${name}`} type="submit">Сохранить</button>
        </form>
      </div>   
    );
  }
  
  export default PopupWithForm;