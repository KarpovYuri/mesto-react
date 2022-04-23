import avatar from '../images/avatar.jpg';

function Main() {
    return (
        <main>

            <section className="profile">
                <div className="profile__avatar-edit">
                    <img src={avatar} alt="Аватар" className="profile__avatar" />
                    <button type="button" aria-label="Кнопка редактирования Аватара" className="profile__avatar-button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" aria-label="Кнопка редактирования профиля"
                        className="profile__edit-button fade-opacity"></button>
                </div>
                <p className="profile__about">Исследователь океана</p>
                <button type="button" aria-label="Кнопка добавления карточки" className="profile__add-button fade-opacity"></button>
            </section>

            <section className="cards"></section>

        </main>
    );
}

export default Main;