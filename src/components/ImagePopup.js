import React from 'react';

function ImagePopup() {
    return (
      <div className="popup popup_function_open-image">
        <div className="popup__container popup__container_function_open-image">
          <img className="popup__image" alt="#" src="#" />
          <p className="popup__subscription"></p>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;