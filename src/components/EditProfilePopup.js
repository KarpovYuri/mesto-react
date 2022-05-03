import React from "react"
import PopupWhithForm from "./PopupWithForm"

function EditProfilePopup({ isOpen, onClose, onStop }) {

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
