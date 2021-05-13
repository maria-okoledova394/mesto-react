import React from 'react';
import { api } from '../utils/Api.js';

function Main(props) {

    const [userName, setuserName] = React.useState("Жак-Ив Кусто");
    const [userDescription, setuserDescription] = React.useState("Исследователь океана кар");
    const [userAvatar, setuserAvatar] = React.useState("");

    React.useEffect(() => {
        api.getProfileInfo()
        .then (data => {
          setuserName(data.name);
          setuserDescription(data.about);
          setuserAvatar(data.avatar);
        })
      });
      

    return (
        <main>
            <section className="profile">
            <button className="profile__avatar-container profile__update-avatar-button" onClick={props.onEditProfile} type="button">
                <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                <div className="profile__avatar-overlay">
                <i className="profile__icon"></i>
                </div>        
            </button>
            
            <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
                <button className="profile__edit-button" onClick={props.onAddPlace} type="button"></button>
            </div>
            <button className="profile__add-button" onClick={props.onEditAvatar} type="button"></button>
            </section>

            <section className="card-list"></section>

            <template id="elements" className="elements">
            <div className="elements__element">
                <img className="elements__image" alt="#" src="#" />
                <div className="elements__info">
                <h2 className="elements__title"></h2>
                <div className="elements__like-container">
                    <button className="elements__like-button elements__like-button_status_notactive" type="button"></button>
                    <p className="elements__like-count"></p>
                </div>
                <button className="elements__delete-button" type="button"></button>
                </div>
            </div>
            </template>
        </main>
    );
  }
  
  export default Main;