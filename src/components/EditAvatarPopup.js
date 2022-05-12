import React, { useState } from "react";
import PopupWhithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isRenderLoading, closeAllPopups }) {


  // Стейты для валидации и очистки формы
  const [avatarLink, setAvatarLink] = useState('');
  const [isAvatarLinkError, setAvatarLinkError] = useState(false);
  const avatarRef = React.useRef();


  // Запуск валидации
  const linkValidate = useValidation(avatarLink, { isEmpty: true, isLink: true });


  // Установка ссылки на аватар
  function handleChangeAvatarLink(event) {
    setAvatarLink(event.target.value);
    setAvatarLinkError(true);
  }


  // Обновление аватара
  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar(
      { avatar: avatarRef.current.value },
      () => {
        setAvatarLinkError(false);
        avatarRef.current.value = '';
        setAvatarLink('');
      })
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
      closeAllPopups={closeAllPopups}
    >
      <input
        ref={avatarRef}
        type="url"
        placeholder="Ссылка на аватар"
        className={`popup__field ${!linkValidate.isInputValid && isAvatarLinkError && 'popup__field_type_error'}`}
        id="avatarInput"
        name="avatar"
        onChange={handleChangeAvatarLink}
        autoComplete="off"
      />
      <span className={`popup__input-error ${!linkValidate.isInputValid && isAvatarLinkError && 'popup__input-error_active'}`}>
        {linkValidate.isTextError}
      </span>
    </PopupWhithForm >
  )

}


export default EditAvatarPopup;
