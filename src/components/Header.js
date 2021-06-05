import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <button onClick={props.onSignOut} className="header__exit">Выйти</button>
        </header>    
    );
  }
  
  export default Header;