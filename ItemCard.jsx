function ItemCard({ item, handleCardClick }) {
  const selectCardClick = () =>{
    handleCardClick(item);
  }
  return (
    <div>
      <li>
        <h2>{item.name}</h2>
        <img onClick={selectCardClick} src={item.link} alt="" />
      </li>
    </div>
  );
}

export default ItemCard;
