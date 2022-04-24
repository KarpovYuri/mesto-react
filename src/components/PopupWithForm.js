function PopupWithForm(props) {
  return (
    <article className={`popup ${props.isOpen && 'popup_opened'}`} id={`popup-${props.name}`}>
      <div className="popup__container popup__container_show_form">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}Form`} noValidate>
          {props.children}
          <button type="submit" aria-label={`Кнопка ${props.labelText}`} className="popup__submit-button">
            {props.buttonText}</button>
        </form>
        <button type="button" onClick={props.onClose} aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"></button>
      </div>
    </article>
  );
}

export default PopupWithForm;
