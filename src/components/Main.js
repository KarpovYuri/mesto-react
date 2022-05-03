// Импорт компонентов
import React from "react";
import api from "../utils/api";
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext";


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {


  // Получение данных текущего пользователя
  const { name, about, avatar } = React.useContext(CurrentUserContext);


  // Создание стейта карточек
  const [cards, setCards] = React.useState([]);


  // Получение данных начальных карточек
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
          <img src={avatar} alt="Аватар" className="profile__avatar" />
          <button
            type="button"
            aria-label="Кнопка редактирования Аватара"
            className="profile__avatar-button"
            onClick={onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button
            type="button"
            aria-label="Кнопка редактирования профиля"
            className="profile__edit-button fade-opacity"
            onClick={onEditProfile}>
          </button>
        </div>
        <p className="profile__about">{about}</p>
        <button
          type="button"
          aria-label="Кнопка добавления карточки"
          className="profile__add-button fade-opacity"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          < Card
            card={card}
            onCardClick={onCardClick}
            key={card._id}
          />
        ))}
      </section>

    </main>
  );
}

export default Main;
