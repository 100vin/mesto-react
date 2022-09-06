import avatarDefault from '../images/avatar.jpg';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <button 
          className="profile__avatar-edit-button"
          type="button"
          onClick={props.onEditAvatar}
        >
          <img className="profile__avatar" src={avatarDefault} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          <template id="cardTemplate">
            <li className="elements__item element">
              <img className="element__image" src="#" alt="" />
              <button className="element__remove-button" type="button" title="Удалить"></button>
              <div className="element__info">
                <h2 className="element__name"></h2>
                <div className="element__like">
                  <button className="element__like-button" type="button"></button>
                  <span className="element__like-amount">0</span>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  )
}

export default Main;