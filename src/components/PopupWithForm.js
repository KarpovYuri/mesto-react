function PopupWithForm(
  {
    isOpen,
    onClose,
    onSubmit,
    title,
    name,
    children,
    labelText,
    buttonText
  }
) {

  return (
    <article className={`popup ${isOpen && 'popup_opened'}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container popup__container_show_form">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
          name={`${name}Form`}
          noValidate
        >
          {children}
          <button
            type="submit"
            aria-label={`Кнопка ${labelText}`}
            className="popup__submit-button">
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"
          onClick={onClose}>
        </button>
      </div>
    </article>
  );

}


export default PopupWithForm;
