function ImagePopup({ isOpen, card, onClose, onStop }) {
  return (
    <article className={`popup popup_overlay_dark ${isOpen && 'popup_opened'}`} onClick={onClose}>
      <div className="popup__container popup__container_show_image" onClick={onStop}>
        <img
          src={card.link}
          alt={card.name}
          className="popup__image"
        />
        <p className="popup__signature">{card.name}</p>
        <button type="button" aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"
          onClick={onClose}></button>
      </div>
    </article>
  );
}

export default ImagePopup;
