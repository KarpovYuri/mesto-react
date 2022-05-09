import React from "react";
import PopupWhithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import UseValidation from "../hooks/UseValidation";


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isRenderLoading }) {

  // Созданиее стейт-переменных
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isInputNameError, setInputNameError] = React.useState(false);
  const [isInputDescriptionError, setInputDescriptionError] = React.useState(false);
  const nameValidate = UseValidation(name, { isEmpty: true, minLength: 5, maxLength: 40 });
  const descriptionValidate = UseValidation(description, { isEmpty: true, minLength: 5, maxLength: 50 });


  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);


  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);


  // Установка имени пользователя
  function handleChangeName(event) {
    setName(event.target.value);
    setInputNameError(true);
  }


  // Установка информации о пользователи
  function handleChangeDescription(event) {
    setDescription(event.target.value);
    setInputDescriptionError(true);
  }


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });

  }


  return (
    <PopupWhithForm
      name="profile"
      title="Редактировать профиль"
      labelText="сохранения данных профиля"
      buttonText={isRenderLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formValid={nameValidate.isInputValid && descriptionValidate.isInputValid}
    >
      <input
        value={name || ''}
        onChange={handleChangeName}
        type="text"
        placeholder="Имя"
        className={`popup__field ${!nameValidate.isInputValid && isInputNameError && 'popup__field_type_error'}`}
        id="nameInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!nameValidate.isInputValid && isInputNameError && 'popup__input-error_active'}`}>
        {nameValidate.isTextError}
      </span>
      <input
        value={description || ''}
        onChange={handleChangeDescription}
        type="text"
        placeholder="О себе"
        className={`popup__field ${!descriptionValidate.isInputValid && isInputDescriptionError && 'popup__field_type_error'}`}
        id="aboutInput"
        name="about"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!descriptionValidate.isInputValid && isInputDescriptionError && 'popup__input-error_active'}`}>
        {descriptionValidate.isTextError}
      </span>
    </PopupWhithForm>
  )
}


export default EditProfilePopup;
