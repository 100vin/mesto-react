function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__item element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={() => handleClick()} />
      <button className="element__remove-button" type="button" title="Удалить"></button>
      <div className="element__info">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-amount">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;