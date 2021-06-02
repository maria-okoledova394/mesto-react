import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}>
            <div className="popup__field">
              <input id="name-input" className="popup__input popup__input_content_name popup__input_function_edit" name="name" placeholder="Имя" type="text" pattern="^[ \-a-zA-Zа-яА-Я]+$" minLength="2" maxLength="40" required />
              <span className="popup__error name-input-error"></span>
            </div>
            <div className="popup__field">
              <input id="about-input" className="popup__input popup__input_content_about popup__input_function_edit" name="about" placeholder="Деятельность" minLength="2" maxLength="200" required />
              <span className="popup__error about-input-error"></span>
            </div>
        </PopupWithForm>
    );
  }
  
  export default EditProfilePopup;