import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <div className="elements__element">
            <img className="elements__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
            <div className="elements__info">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button elements__like-button_status_notactive" type="button"></button>
                    <p className="elements__like-count">{props.card.likes.length}</p>
                </div>
                <button className={isOwn ? "elements__delete-button" : "elements__delete-button_status_notvisible"} type="button"></button>
            </div>
        </div>  
    );
  }
  
  export default Card;