function Card({ card }) {
    return (
        <div className="card">
            <button type="button" aria-label="Иконка мусорного бака" className="card__trash fade-opacity"></button>
            <img src={card.link} alt="" className="card__picture" />
            <div className="card__info">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" aria-label="Иконка сердечка" className="card__like-btn"></button>
                    <span className="card__like-qty">{card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;