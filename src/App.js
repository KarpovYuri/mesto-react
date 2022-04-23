import './App.css';

function App() {
  return (
    <div class="page">

      <header class="header">
        <a href="#" aria-label="Логотип Mesto Russia" class="header__logo fade-opacity"></a>
      </header>

      <main>

        <section class="profile">
          <div class="profile__avatar-edit">
            <img src="#" alt="Аватар" class="profile__avatar" />
            <button type="button" aria-label="Кнопка редактирования Аватара" class="profile__avatar-button"></button>
          </div>
          <div class="profile__info">
            <h1 class="profile__name"></h1>
            <button type="button" aria-label="Кнопка редактирования профиля"
              class="profile__edit-button fade-opacity"></button>
          </div>
          <p class="profile__about"></p>
          <button type="button" aria-label="Кнопка добавления карточки" class="profile__add-button fade-opacity"></button>
        </section>

        <section class="cards"></section>

      </main>

      <footer class="footer">&copy; 2022 Карпов Юрий</footer>

      <article class="popup" id="popup-edit">
        <div class="popup__container popup__container_show_form">
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" name="profileForm" novalidate>
            <input type="text" placeholder="Имя" class="popup__field" id="nameInput" name="name" required minlength="2"
              maxlength="40" />
            <span class="popup__input-error nameInput-error"></span>
            <input type="text" placeholder="О себе" class="popup__field" id="aboutInput" name="about" required
              minlength="2" maxlength="200" />
            <span class="popup__input-error aboutInput-error"></span>
            <button type="submit" aria-label="Кнопка сохранения формы" class="popup__submit-button">Сохранить</button>
          </form>
          <button type="button" aria-label="Кнопка закрытия окна" class="popup__close-button fade-opacity"></button>
        </div>
      </article>

      <article class="popup" id="popup-avatar">
        <div class="popup__container popup__container_show_form">
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" name="avatarForm" novalidate>
            <input type="url" placeholder="Ссылка на аватар" class="popup__field" id="avatarInput" name="avatar" required />
            <span class="popup__input-error avatarInput-error"></span>
            <button type="submit" aria-label="Кнопка сохранения формы" class="popup__submit-button">Сохранить</button>
          </form>
          <button type="button" aria-label="Кнопка закрытия окна" class="popup__close-button fade-opacity"></button>
        </div>
      </article>

      <article class="popup" id="popup-add">
        <div class="popup__container popup__container_show_form">
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" name="addForm" novalidate>
            <input type="text" placeholder="Название" class="popup__field" id="titleInput" name="name" required
              minlength="2" maxlength="30" />
            <span class="popup__input-error titleInput-error"></span>
            <input type="url" placeholder="Ссылка на картинку" class="popup__field" id="pictureInput" name="link"
              required />
            <span class="popup__input-error pictureInput-error"></span>
            <button type="submit" aria-label="Кнопка сохранения формы" class="popup__submit-button">Создать</button>
          </form>
          <button type="button" aria-label="Кнопка закрытия окна" class="popup__close-button fade-opacity"></button>
        </div>
      </article>

      <article class="popup" id="popup-delete">
        <div class="popup__container popup__container_show_form">
          <h2 class="popup__title">Вы уверены?</h2>
          <form class="popup__form" name="deleteForm" novalidate>
            <button type="submit" aria-label="Кнопка подтверждения удаления" class="popup__submit-button">Да</button>
          </form>
          <button type="button" aria-label="Кнопка закрытия окна" class="popup__close-button fade-opacity"></button>
        </div>
      </article>

      <article class="popup popup_overlay_dark" id="popup-image">
        <div class="popup__container popup__container_show_image">
          <img src="#" alt="" class="popup__image" />
          <p class="popup__signature"></p>
          <button type="button" aria-label="Кнопка закрытия окна" class="popup__close-button fade-opacity"></button>
        </div>
      </article>

      <template id="card-template">
        <div class="card">
          <button type="button" aria-label="Иконка мусорного бака" class="card__trash fade-opacity"></button>
          <img src="#" alt="" class="card__picture" />
          <div class="card__info">
            <h2 class="card__title"></h2>
            <div class="card__like-wrapper">
              <button type="button" aria-label="Иконка сердечка" class="card__like-btn"></button>
              <span class="card__like-qty"></span>
            </div>
          </div>
        </div>
      </template>


    </div>


  );
}

export default App;
