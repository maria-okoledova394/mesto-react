import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = React.useState("Исследователь океана кар");
    const [userAvatar, setUserAvatar] = React.useState("");

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo()
        .then (data => {
          setUserName(data.name);
          setUserDescription(data.about);
          setUserAvatar(data.avatar);
        })
        .catch(err => {
          console.log(err);
        })

        api.getInitialCards()
        .then (data => {
          setCards(data);
        })
        .catch(err => {
          console.log(err);
        })

      }, []);

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

            <section className="card-list">
              {cards.map((card) => {
                return(
                  <Card key={card._id} card={card} onCardClick={props.onCardClick} />
              )})}
            </section>
        </main>
    );
  }
  
  export default Main;