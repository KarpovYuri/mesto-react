import React from "react"
import PopupWhithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onStop }) {

  return (
    <PopupWhithForm
      name="avatar"
      title="Обновить аватар"
      labelText="сохранения аватара"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
    >
      <input
        type="url"
        placeholder="Ссылка на аватар"
        className="popup__field"
        id="avatarInput"
        name="avatar"
        required
      />
      <span className="popup__input-error avatarInput-error"></span>
    </PopupWhithForm >
  )

}

export default EditAvatarPopup;
