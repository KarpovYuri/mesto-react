function PopupWithForm({ isOpen, name, title, children, labelText, buttonText, onClose }) {
  return (
    <article className={`popup ${isOpen && 'popup_opened'}`} id={`popup-${name}`}>
      <div className="popup__container popup__container_show_form">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}Form`} noValidate>
          {children}
          <button type="submit" aria-label={`Кнопка ${labelText}`} className="popup__submit-button">
            {buttonText}</button>
        </form>
        <button type="button" onClick={onClose} aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"></button>
      </div>
    </article>
  );
}

export default PopupWithForm;
