function ImagePopup(props) {
  const openClass = props.card ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_show-photo ${openClass}`} id="popupShowPhoto">
      <figure className="popup__figure">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <img className="popup__photo" src={props.link} alt={props.card} />
        <figcaption className="popup__caption">{props.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;