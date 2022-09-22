import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm ';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import avatarDefault from '../images/avatar.jpg';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Жак-Ив Кусто',
    about: 'Исследователь океана',
    avatar: avatarDefault,
  });
  const [cards, setCards] = useState([]);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    Promise.all([
      api.getUserInfo(), 
      api.getInitialCards()
    ])
    .then(([userData, initialCards]) => {
      setCurrentUser(userData);
      setCards(initialCards);
    })
    .catch(err => console.log(err));
  }, []);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

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

  function handleUpdateUser(userData) {
    api.changeUserInfo(userData)
      .then(newUserData => {
        setCurrentUser(newUserData);
      })
      .catch(err => console.log(err))
      .finally(() => closeAllPopups());
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <PopupWithForm
        name="AddCard"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input" id="input-title" name="title" type="text" value="" minLength="2" maxLength="30" placeholder="Название" required />
        <span className="popup__input-error" id="input-title-error"></span>
        <input className="popup__input" id="input-link" name="link" type="url" value="" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error" id="input-link-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="Confirm"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;