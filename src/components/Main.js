// Импорт компонентов
import React from "react";
import api from "../utils/api";
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext";


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {


  // Получение данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);


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


  function handleCardLike(card) {


    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);


    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        console.log(newCard)
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }


  return (
    <main>

      <section className="profile">
        <div className="profile__avatar-edit">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
          <button
            type="button"
            aria-label="Кнопка редактирования Аватара"
            className="profile__avatar-button"
            onClick={onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="Кнопка редактирования профиля"
            className="profile__edit-button fade-opacity"
            onClick={onEditProfile}>
          </button>
        </div>
        <p className="profile__about">{currentUser.about}</p>
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
            onCardLike={handleCardLike}
            key={card._id}
          />
        ))}
      </section>

    </main>
  );
}

export default Main;
