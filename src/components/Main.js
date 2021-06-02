import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
        .then (data => {
          setCards(data);
        })
        .catch(err => {
          console.log(err);
        })

    }, []);

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      
      api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }

    function handleCardDelete(card) {
      api.removeCard(card._id)
      .then(() => {
          setCards((state) => state.filter((c) => c._id !== card._id));
      });
    }

    return (
        <main>
            <section className="profile">
            <button className="profile__avatar-container profile__update-avatar-button" onClick={props.onEditAvatar} type="button">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                <div className="profile__avatar-overlay">
                <i className="profile__icon"></i>
                </div>        
            </button>
            
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <p className="profile__subtitle">{currentUser.about}</p>
                <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>

            <section className="card-list">
              {cards.map((card) => {
                return(
                  <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
              )})}
            </section>
        </main>
    );
  }
  
  export default Main;