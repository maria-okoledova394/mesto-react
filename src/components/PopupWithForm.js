import React from 'react';
// TODO добавить атрибут name тегу form

function PopupWithForm(props) {
    return (
      <div className={`popup popup_function_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <form className={`popup__form popup__container popup__container_function_${props.name} popup__container_type_form`} noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className={`popup__title popup__title_function_${props.name}`}>{props.title}</h2>
          {props.children}
          <button className={`popup__button popup__button-save popup__button-save_function_${props.name}`} type="submit">Сохранить</button>
        </form>
      </div>   
    );
  }
  
  export default PopupWithForm;

  //{isLoading ? <Spinner /> : cards.map(({id, ...card}) => <Card key={id} {...card} />)}