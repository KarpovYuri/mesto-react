import PopupWhithForm from "./PopupWithForm";


function ConfirmDeletePopup({ isOpen, onClose, onDeleteCard, card }) {

  // Удаляем карточку
  function handleSubmit(event) {
    event.preventDefault();
    onDeleteCard(card);
  }


  return (
    <PopupWhithForm
      name="delete"
      title="Вы уверены?"
      labelText="подтверждения удаления карточки"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}


export default ConfirmDeletePopup;
