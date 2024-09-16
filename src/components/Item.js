import { useCart } from "../context/CartContext";
import "./Item.css"

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const {formatMoney} = useCart()
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Name : {name}</p>
        <p className="price">Price : {formatMoney(price)} bath</p>
      </div>
      <div className="quantity">
        <button className="decrease">-</button>
        <input type="text" value={quantity} disabled />
        <button className="add">+</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button>Delete item</button>
    </div>
  );
}
