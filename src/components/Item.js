import "./Item.css"

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Name : {name}</p>
        <p className="price">Price : {price}</p>
      </div>
      <div className="quantity">
        <button className="decrease">-</button>
        <input type="text" value={quantity} disabled />
        <button className="add">+</button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <button>Delete item</button>
    </div>
  );
}
