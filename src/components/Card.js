import React from 'react';

function Card({ props }) {
    return (
        <div className="elements__element">
            <img className="elements__image" alt={props.name} src={props.link} />
            <div className="elements__info">
                <h2 className="elements__title">{props.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button elements__like-button_status_notactive" type="button"></button>
                    <p className="elements__like-count">{props.likes.length}</p>
                </div>
                <button className="elements__delete-button" type="button"></button>
            </div>
        </div>  
    );
  }
  
  export default Card;