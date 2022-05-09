import React from "react";
import PopupWhithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";


function AddPlacePopup({ isOpen, onClose, onStop, onAddPlace, isRenderLoading }) {

  // Создание стейтов
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');
  const [isDirtyInputName, setDirtyInputName] = React.useState(false);
  const [isDirtyInputLink, setDirtyInputLink] = React.useState(false);
  const nameValidate = useValidation(placeName, { isEmpty: true, minLength: 2, maxLength: 30 });
  const linkValidate = useValidation(placeLink, { isEmpty: true, isLink: true });


  // Установка названия места
  function handleChangePlaceName(event) {
    setPlaceName(event.target.value);
  }


  // Показываем ошибку при смене фокуса поля Name
  function handleBlurPlaceName() {
    setDirtyInputName(true);
  }


  // Устанавливаем ссылку на изображение места
  function handleChangePlaceLink(event) {
    setPlaceLink(event.target.value);
  }


  // Показываем ошибку при смене фокуса поля Link
  function handleBlurPlaceLink() {
    setDirtyInputLink(true);
  }


  // Добавляем изображение
  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }


  return (
    <PopupWhithForm
      name="add"
      title="Новое место"
      labelText="создания карточки"
      buttonText={isRenderLoading ? 'Создание...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
      onSubmit={handleSubmit}
      formValid={nameValidate.isInputValid && linkValidate.isInputValid}
    >
      <input
        value={placeName}
        onChange={handleChangePlaceName}
        onBlur={handleBlurPlaceName}
        type="text"
        placeholder="Название"
        className={`popup__field ${!nameValidate.isInputValid && isDirtyInputName && 'popup__field_type_error'}`}
        id="titleInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!nameValidate.isInputValid && isDirtyInputName && 'popup__input-error_active'}`}>
        {nameValidate.isTextError}
      </span>
      <input
        value={placeLink}
        onChange={handleChangePlaceLink}
        onBlur={handleBlurPlaceLink}
        type="url"
        placeholder="Ссылка на картинку"
        className={`popup__field ${!linkValidate.isInputValid && isDirtyInputLink && 'popup__field_type_error'}`}
        id="pictureInput"
        name="link"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!linkValidate.isInputValid && isDirtyInputLink && 'popup__input-error_active'}`}>
        {linkValidate.isTextError}
      </span>
    </PopupWhithForm >
  )

}


export default AddPlacePopup;
