function ItemCard({ item }) {
  return (
    <div>
      <li>
        <h2>{item.name}</h2>
        <img src={item.link} alt="" />
      </li>
    </div>
  );
}

export default ItemCard;
