import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm ';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      
      <PopupWithForm
        name="EditAvatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input" id="input-avatarlink" name="link" type="url" value="" placeholder="Ссылка на аватар" required />
        <span className="popup__input-error" id="input-avatarlink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="EditProfile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input" id="input-name" name="name" type="text" value="" minlength="2" maxlength="40" placeholder="Имя" required />
        <span className="popup__input-error" id="input-name-error"></span>
        <input className="popup__input" id="input-job" name="job" type="text" value="" minlength="2" maxlength="200" placeholder="О себе" required />
        <span className="popup__input-error" id="input-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="AddCard"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input" id="input-title" name="title" type="text" value="" minlength="2" maxlength="30" placeholder="Название" required />
        <span className="popup__input-error" id="input-title-error"></span>
        <input className="popup__input" id="input-link" name="link" type="url" value="" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error" id="input-link-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      {/* <div className="popup" id="popupConfirm">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_cofirm">Вы уверены?</h2>
          <form className="popup__form" name="formConfirm">
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default App;