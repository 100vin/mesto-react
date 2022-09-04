import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>

      <div className="popup" id="popupEditAvatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="formEditAvatar">
            <input className="popup__input" id="input-avatarlink" name="link" type="url" value="" placeholder="Ссылка на аватар" required />
            <span className="popup__input-error" id="input-avatarlink-error"></span>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      
      <div className="popup" id="popupEditProfile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="formEditProfile">
            <input className="popup__input" id="input-name" name="name" type="text" value="" minlength="2" maxlength="40" placeholder="Имя" required />
            <span className="popup__input-error" id="input-name-error"></span>
            <input className="popup__input" id="input-job" name="job" type="text" value="" minlength="2" maxlength="200" placeholder="О себе" required />
            <span className="popup__input-error" id="input-job-error"></span>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      
      <div className="popup" id="popupAddCard">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="formAddCard">
            <input className="popup__input" id="input-title" name="title" type="text" value="" minlength="2" maxlength="30" placeholder="Название" required />
            <span className="popup__input-error" id="input-title-error"></span>
            <input className="popup__input" id="input-link" name="link" type="url" value="" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="input-link-error"></span>
            <button className="popup__submit" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_show-photo" id="popupShowPhoto">
        <figure className="popup__figure">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__photo" src="#" alt="Название" />
          <figcaption className="popup__caption">Название</figcaption>
        </figure>
      </div>

      <div className="popup" id="popupConfirm">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_cofirm">Вы уверены?</h2>
          <form className="popup__form" name="formConfirm">
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </>
  );
}

export default App;
