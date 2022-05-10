import React from "react";
import PopupWhithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";


function AddPlacePopup(
  {
    isOpen,
    onClose,
    onStop,
    onAddPlace,
    isRenderLoading,
    placeName,
    setPlaceName,
    placeLink,
    setPlaceLink,
    isPlaceNameError,
    setPlaceNameError,
    isPlaceLinkError,
    setPlaceLinkError

  }
) {

  // Запуск валидации
  const nameValidate = useValidation(placeName, { isEmpty: true, minLength: 5, maxLength: 30 });
  const linkValidate = useValidation(placeLink, { isEmpty: true, isLink: true });


  // Установка названия места
  function handleChangePlaceName(event) {
    setPlaceName(event.target.value);
    setPlaceNameError(true);
  }


  // Устанавливаем ссылку на изображение места
  function handleChangePlaceLink(event) {
    setPlaceLink(event.target.value);
    setPlaceLinkError(true);
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
        className={`popup__field ${!nameValidate.isInputValid && isPlaceNameError && 'popup__field_type_error'}`}
        id="titleInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!nameValidate.isInputValid && isPlaceNameError && 'popup__input-error_active'}`}>
        {nameValidate.isTextError}
      </span>
      <input
        value={placeLink}
        onChange={handleChangePlaceLink}
        type="url"
        placeholder="Ссылка на картинку"
        className={`popup__field ${!linkValidate.isInputValid && isPlaceLinkError && 'popup__field_type_error'}`}
        id="pictureInput"
        name="link"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!linkValidate.isInputValid && isPlaceLinkError && 'popup__input-error_active'}`}>
        {linkValidate.isTextError}
      </span>
    </PopupWhithForm >
  )

}


export default AddPlacePopup;
