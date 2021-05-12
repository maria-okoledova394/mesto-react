import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import React from 'react';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_function_edit">
        <form className="popup__form popup__container popup__container_function_edit popup__container_type_form" noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_function_edit">Редактировать профиль</h2>
          <div className="popup__field">
            <input id="name-input" className="popup__input popup__input_content_name popup__input_function_edit" name="name" placeholder="Имя" type="text" pattern="^[ \-a-zA-Zа-яА-Я]+$" minLength="2" maxLength="40" required />
            <span className="popup__error name-input-error"></span>
          </div>
          <div className="popup__field">
            <input id="about-input" className="popup__input popup__input_content_about popup__input_function_edit" name="about" placeholder="Деятельность" minLength="2" maxLength="200" required />
            <span className="popup__error about-input-error"></span>
          </div>
          <button className="popup__button popup__button-save popup__button-save_function_edit" type="submit">Сохранить</button>
        </form>
      </div>

      <div className="popup popup_function_update-avatar">
        <form className="popup__form popup__container popup__container_function_update-avatar popup__container_type_form" noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_function_update-avatar">Обновить аватар</h2>
          <div className="popup__field">
            <input id="avatar-input" className="popup__input popup__input_content_avatar popup__input_function_update-avatar" name="avatar" placeholder="Аватар" type="url" required />
            <span className="popup__error avatar-input-error"></span>
          </div>
          <button className="popup__button popup__button-save popup__button-save_function_update-avatar popup__button_disabled" type="submit" disabled>Сохранить</button>
        </form>
      </div>

      <div className="popup popup_function_add">
        <form className="popup__form popup__container popup__container_function_add popup__container_type_form" noValidate>
          <button className="popup__close-button " type="button"></button>
          <h2 className="popup__title popup__title_function_add">Новое место</h2>
          <div className="popup__field">
            <input id="place-input" className="popup__input popup__input_content_place popup__input_function_add" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error place-input-error"></span>
          </div>
          <div className="popup__field">
            <input id="url-input" className="popup__input popup__input_content_picture popup__input_function_add" name="link" placeholder="Ссылка на картинку" type="url" required />
            <span className="popup__error url-input-error"></span>
          </div>
          <button className="popup__button popup__button-save popup__button-save_function_add popup__button_disabled" type="submit" disabled>Сохранить</button>
        </form>
      </div>

      <div className="popup popup_function_delete">
        <form className="popup__form popup__container popup__container_function_delete popup__container_type_form" noValidate>
          <button className="popup__close-button " type="button"></button>
          <h2 className="popup__title popup__title_function_delete">Вы уверены?</h2>
          <button className="popup__button popup__button-save popup__button-save_function_delete popup__button_disabled" type="submit" disabled>Да</button>
        </form>
      </div>

      <div className="popup popup_function_open-image">
        <div className="popup__container popup__container_function_open-image">
          <img className="popup__image" alt="#" src="#" />
          <p className="popup__subscription"></p>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>

    </div>
  );
}

export default App;
