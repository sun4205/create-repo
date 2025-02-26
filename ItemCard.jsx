function ItemCard({ item }) {
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
        <img src={item.link} alt="" />
      </div>
    </div>
  );
}

export default ItemCard;
