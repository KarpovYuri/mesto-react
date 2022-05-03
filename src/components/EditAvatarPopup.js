import React from "react";
import PopupWhithForm from "./PopupWithForm";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = React.useRef();


  // Обновление аватара
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }


  return (
    <PopupWhithForm
      name="avatar"
      title="Обновить аватар"
      labelText="сохранения аватара"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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
