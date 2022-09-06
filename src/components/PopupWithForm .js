function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={`popup${props.name}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`form${props.name}`}>
          {props.children}
          <button className="popup__submit" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;