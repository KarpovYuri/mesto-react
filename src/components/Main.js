import React from "react";
import api from "../utils/api";


function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo()
      .then(result => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(error => { console.log(error); })
  }, []);


  React.useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(error => { console.log(error) });
  }, []);


  return (
    <main>

      <section className="profile">
        <div className="profile__avatar-edit">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <button type="button" aria-label="Кнопка редактирования Аватара"
            className="profile__avatar-button"
            onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" aria-label="Кнопка редактирования профиля"
            className="profile__edit-button fade-opacity"
            onClick={onEditProfile}></button>
        </div>
        <p className="profile__about">{userDescription}</p>
        <button type="button" aria-label="Кнопка добавления карточки"
          className="profile__add-button fade-opacity"
          onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <div className="card" key={card._id}>
            <button type="button" aria-label="Иконка мусорного бака" className="card__trash fade-opacity"></button>
            <img src={card.link} alt="" className="card__picture" />
            <div className="card__info">
              <h2 className="card__title">{card.name}</h2>
              <div className="card__like-wrapper">
                <button type="button" aria-label="Иконка сердечка" className="card__like-btn"></button>
                <span className="card__like-qty">{card.likes.length}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

export default Main;
