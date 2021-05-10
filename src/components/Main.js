function Main() {
    return (
        <main>
            <section className="profile">
            <button className="profile__avatar-container profile__update-avatar-button">
                <img className="profile__avatar" src="#" alt="Аватар" />
                <div className="profile__avatar-overlay">
                <i className="profile__icon"></i>
                </div>        
            </button>
            
            <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <p className="profile__subtitle">Исследователь океана</p>
                <button className="profile__edit-button" type="button"></button>
            </div>
            <button className="profile__add-button" type="button"></button>
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