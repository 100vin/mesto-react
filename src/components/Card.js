function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <li className="elements__item element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__remove-button" type="button" title="Удалить"></button>
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-amount">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;