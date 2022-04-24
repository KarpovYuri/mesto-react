function ImagePopup(props) {
  return (
    <article className={`popup popup_overlay_dark ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_show_image">
        <img
          src={`${props.card.link}`}
          alt={props.card.name}
          className="popup__image"
        />
        <p className="popup__signature">{props.card.name}</p>
        <button type="button" aria-label="Кнопка закрытия окна" onClick={props.onClose}
          className="popup__close-button fade-opacity"></button>
      </div>
    </article>
  );
}

export default ImagePopup;
