import React from "react"
import PopupWhithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose, onStop }) {


  return (
    <PopupWhithForm
      name="add"
      title="Новое место"
      labelText="создания карточки"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
    >
      <input
        type="text"
        placeholder="Название"
        className="popup__field"
        id="titleInput"
        name="name"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__input-error titleInput-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__field"
        id="pictureInput"
        name="link"
        required
      />
      <span className="popup__input-error pictureInput-error"></span>
    </PopupWhithForm >
  )

}

export default AddPlacePopup;
