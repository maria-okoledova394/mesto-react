import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';


function App() {

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
          <div className="popup__field">
            <input id="name-input" className="popup__input popup__input_content_name popup__input_function_edit" name="name" placeholder="Имя" type="text" pattern="^[ \-a-zA-Zа-яА-Я]+$" minLength="2" maxLength="40" required />
            <span className="popup__error name-input-error"></span>
          </div>
          <div className="popup__field">
            <input id="about-input" className="popup__input popup__input_content_about popup__input_function_edit" name="about" placeholder="Деятельность" minLength="2" maxLength="200" required />
            <span className="popup__error about-input-error"></span>
          </div>
      </PopupWithForm>

      <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
      <div className="popup__field">
            <input id="avatar-input" className="popup__input popup__input_content_avatar popup__input_function_update-avatar" name="avatar" placeholder="Аватар" type="url" required />
            <span className="popup__error avatar-input-error"></span>
          </div>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen}>
          <div className="popup__field">
            <input id="place-input" className="popup__input popup__input_content_place popup__input_function_add" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error place-input-error"></span>
          </div>
          <div className="popup__field">
            <input id="url-input" className="popup__input popup__input_content_picture popup__input_function_add" name="link" placeholder="Ссылка на картинку" type="url" required />
            <span className="popup__error url-input-error"></span>
          </div>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" />

      <ImagePopup />

    </div>
  );
}

export default App;
