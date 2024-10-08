import { useCart } from "../context/CartContext";
import "./Item.css"

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const {formatMoney , removeItem , addQuantity , decreaseQuantity} = useCart()
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Name : {name}</p>
        <p className="price">Price : {formatMoney(price)} bath</p>
      </div>
      <div className="quantity">
        <button className="decrease" onClick={() => decreaseQuantity(id)}>-</button>
        <input type="text" value={quantity} disabled />
        <button className="add" onClick={() => addQuantity(id)}>+</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button onClick={()=>removeItem(id)} >Delete item</button>
    </div>
  );
}
