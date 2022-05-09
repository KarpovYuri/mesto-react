import React from "react";
import PopupWhithForm from "./PopupWithForm";
import UseValidation from "../hooks/UseValidation";


function AddPlacePopup({ isOpen, onClose, onStop, onAddPlace, isRenderLoading }) {

  // Создание стейтов
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');
  const [isInputNameError, setInputNameError] = React.useState(false);
  const [isInputLinkError, setInputLinkError] = React.useState(false);
  const nameValidate = UseValidation(placeName, { isEmpty: true, minLength: 5, maxLength: 30 });
  const linkValidate = UseValidation(placeLink, { isEmpty: true, isLink: true });


  // Установка названия места
  function handleChangePlaceName(event) {
    setPlaceName(event.target.value);
    setInputNameError(true);
  }



  // Устанавливаем ссылку на изображение места
  function handleChangePlaceLink(event) {
    setPlaceLink(event.target.value);
    setInputLinkError(true);
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
        type="text"
        placeholder="Название"
        className={`popup__field ${!nameValidate.isInputValid && isInputNameError && 'popup__field_type_error'}`}
        id="titleInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!nameValidate.isInputValid && isInputNameError && 'popup__input-error_active'}`}>
        {nameValidate.isTextError}
      </span>
      <input
        value={placeLink}
        onChange={handleChangePlaceLink}
        type="url"
        placeholder="Ссылка на картинку"
        className={`popup__field ${!linkValidate.isInputValid && isInputLinkError && 'popup__field_type_error'}`}
        id="pictureInput"
        name="link"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!linkValidate.isInputValid && isInputLinkError && 'popup__input-error_active'}`}>
        {linkValidate.isTextError}
      </span>
    </PopupWhithForm >
  )

}


export default AddPlacePopup;
