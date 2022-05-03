import React from "react"
import PopupWhithForm from "./PopupWithForm"


function AddPlacePopup({ isOpen, onClose, onStop, onAddPlace }) {


  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');


  function handleChangePlaceName(e) {
    setPlaceName(e.target.value);
  }


  function handleChangePlaceLink(e) {
    setPlaceLink(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }


  return (
    <PopupWhithForm
      name="add"
      title="Новое место"
      labelText="создания карточки"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
      onSubmit={handleSubmit}
    >
      <input
        value={placeName}
        onChange={handleChangePlaceName}
        type="text"
        placeholder="Название"
        className="popup__field"
        id="titleInput"
        name="name"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__input-error titleInput-error"></span>
      <input
        value={placeLink}
        onChange={handleChangePlaceLink}
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__field"
        id="pictureInput"
        name="link"
        required
      />
      <span className="popup__input-error pictureInput-error"></span>
    </PopupWhithForm >
  )

}


export default AddPlacePopup;
