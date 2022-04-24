function ImagePopup() {
  return (
    <article className="popup popup_overlay_dark" id="popup-image">
      <div className="popup__container popup__container_show_image">
        <img src="#" alt="" className="popup__image" />
        <p className="popup__signature"></p>
        <button type="button" aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"></button>
      </div>
    </article>
  );
}

export default ImagePopup;
