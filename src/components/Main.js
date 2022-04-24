import React from "react";
import api from "../utils/api";
import Card from './Card';


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
          < Card card={card} key={card._id} />
        ))}
      </section>

    </main>
  );
}

export default Main;
