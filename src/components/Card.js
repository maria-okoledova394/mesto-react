import React from 'react';

function Card(props) {

function hendleClick() {
    props.onCardClick(props.card)
}

    return (
        <div className="elements__element" onClick={hendleClick}>
            <img className="elements__image" alt={props.card.name} src={props.card.link} />
            <div className="elements__info">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button elements__like-button_status_notactive" type="button"></button>
                    <p className="elements__like-count">{props.card.likes.length}</p>
                </div>
                <button className="elements__delete-button" type="button"></button>
            </div>
        </div>  
    );
  }
  
  export default Card;