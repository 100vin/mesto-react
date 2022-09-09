function ImagePopup(props) {
  return (
    <div className={`popup popup_type_show-photo ${props.card ? 'popup_opened' : ''}`} id="popupShowPhoto">
      <figure className="popup__figure">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <img className="popup__photo" src={props.card?.link} alt={props.card?.name} />
        <figcaption className="popup__caption">{props.card?.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;