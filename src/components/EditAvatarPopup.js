import React from "react";
import PopupWhithForm from "./PopupWithForm";
import UseValidation from "../hooks/UseValidation";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isRenderLoading }) {

  const avatarRef = React.useRef();
  const [avatarLink, setAvatarLink] = React.useState('');
  const [isInputLinkError, setInputLinkError] = React.useState(false);
  const linkValidate = UseValidation(avatarLink, { isEmpty: true, isLink: true });


  // Установка ссылки на аватар
  function handleChangeAvatarLink(event) {
    setAvatarLink(event.target.value);
    setInputLinkError(true);
  }


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
      buttonText={isRenderLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formValid={linkValidate.isInputValid}
    >
      <input
        ref={avatarRef}
        type="url"
        placeholder="Ссылка на аватар"
        className={`popup__field ${!linkValidate.isInputValid && isInputLinkError && 'popup__field_type_error'}`}
        id="avatarInput"
        name="avatar"
        onChange={handleChangeAvatarLink}
        autoComplete="off"
      />
      <span className={`popup__input-error ${!linkValidate.isInputValid && isInputLinkError && 'popup__input-error_active'}`}>
        {linkValidate.isTextError}
      </span>
    </PopupWhithForm >
  )

}


export default EditAvatarPopup;
