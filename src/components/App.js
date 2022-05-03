// Импорты компонентов
import React from "react";
import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImagePopup from '../components/ImagePopup';
import PopupWhithForm from '../components/PopupWithForm';
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";


function App() {

  // Создание стейтов
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [curentUser, setCurentUser] = React.useState({});


  // Получение данных текущего пользователя
  React.useEffect(() => {
    api.getUserInfo()
      .then(result => { setCurentUser(result) })
      .catch(error => { console.log(error) })
  }, []);


  // Открытие попапа редактирования Аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }


  // Открытие попапа редактирования данных профиля
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }


  // Открытие попапа добавления карточки места
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }


  // Открытие попапа изображения
  function handleCardClick(card) {
    setImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
  }


  // Остановка всплытия клика
  function handleChildClick(evt) {
    evt.stopPropagation();
  }


  // Закрытие попапов
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }


  // Основной компонент
  return (
    <div className="page">

      <CurrentUserContext.Provider value={curentUser}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />
      </CurrentUserContext.Provider>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        onStop={handleChildClick} />

      <PopupWhithForm
        name="profile"
        title="Редактировать профиль"
        labelText="сохранения данных профиля"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onStop={handleChildClick}>
        <input type="text" placeholder="Имя" className="popup__field" id="nameInput" name="name" required minLength="2"
          maxLength="40" />
        <span className="popup__input-error nameInput-error"></span>
        <input type="text" placeholder="О себе" className="popup__field" id="aboutInput" name="about" required
          minLength="2" maxLength="200" />
        <span className="popup__input-error aboutInput-error"></span>
      </PopupWhithForm>

      <PopupWhithForm
        name="avatar"
        title="Обновить аватар"
        labelText="сохранения аватара"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onStop={handleChildClick}>
        <input type="url" placeholder="Ссылка на аватар" className="popup__field" id="avatarInput" name="avatar" required />
        <span className="popup__input-error avatarInput-error"></span>
      </PopupWhithForm >

      <PopupWhithForm
        name="add"
        title="Новое место"
        labelText="создания карточки"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onStop={handleChildClick}>
        <input type="text" placeholder="Название" className="popup__field" id="titleInput" name="name" required
          minLength="2" maxLength="30" />
        <span className="popup__input-error titleInput-error"></span>
        <input type="url" placeholder="Ссылка на картинку" className="popup__field" id="pictureInput" name="link"
          required />
        <span className="popup__input-error pictureInput-error"></span>
      </PopupWhithForm >

      <PopupWhithForm
        name="delete"
        title="Вы уверены?"
        labelText="подтверждения удаления карточки"
        buttonText="Да"
        onClose={closeAllPopups}
        onStop={handleChildClick} />

    </div >


  );
}

export default App;
