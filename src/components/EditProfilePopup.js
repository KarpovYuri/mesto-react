import React from "react"
import PopupWhithForm from "./PopupWithForm"
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onStop }) {

  // Созданиее стейт-переменных
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');


  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);


  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }


  return (
    <PopupWhithForm
      name="profile"
      title="Редактировать профиль"
      labelText="сохранения данных профиля"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
    >
      <input
        value={name || ''}
        onChange={handleChangeName}
        type="text"
        placeholder="Имя"
        className="popup__field"
        id="nameInput"
        name="name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__input-error nameInput-error"></span>
      <input
        value={description || ''}
        onChange={handleChangeDescription}
        type="text"
        placeholder="О себе"
        className="popup__field"
        id="aboutInput"
        name="about"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error aboutInput-error"></span>
    </PopupWhithForm>
  )
}

export default EditProfilePopup;
