import avatar from '../images/avatar.jpg';


function handleEditAvatarClick() {
    const popup = document.querySelector('#popup-avatar');
    popup.classList.add('popup_opened');
}


function handleEditProfileClick() {
    const popup = document.querySelector('#popup-edit');
    popup.classList.add('popup_opened');
}


function handleAddPlaceClick() {
    const popup = document.querySelector('#popup-add');
    popup.classList.add('popup_opened');
}


function Main() {
    return (
        <main>

            <section className="profile">
                <div className="profile__avatar-edit">
                    <img src={avatar} alt="Аватар" className="profile__avatar" />
                    <button type="button" aria-label="Кнопка редактирования Аватара"
                        className="profile__avatar-button"
                        onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" aria-label="Кнопка редактирования профиля"
                        className="profile__edit-button fade-opacity"
                        onClick={handleEditProfileClick}></button>
                </div>
                <p className="profile__about">Исследователь океана</p>
                <button type="button" aria-label="Кнопка добавления карточки"
                    className="profile__add-button fade-opacity"
                    onClick={handleAddPlaceClick}></button>
            </section>

            <section className="cards"></section>

        </main>
    );
}

export default Main;