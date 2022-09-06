function ImagePopup() {
  return (
    <div className="popup popup_type_show-photo" id="popupShowPhoto">
      <figure className="popup__figure">
        <button className="popup__close-button" type="button"></button>
        <img className="popup__photo" src="#" alt="Название" />
        <figcaption className="popup__caption">Название</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;