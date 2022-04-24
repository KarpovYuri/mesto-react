function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card">
            <button type="button" aria-label="Иконка мусорного бака" className="card__trash fade-opacity"></button>
            <img
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
                className="card__picture"
            />
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" aria-label="Иконка сердечка" className="card__like-btn"></button>
                    <span className="card__like-qty">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;