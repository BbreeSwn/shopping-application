export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Name : {props.name}</p>
        <p className="price">Price : {props.price}</p>
      </div>
      <div className="quantity">
        <button>-</button>
        <input type="text" value={quantity} disabled />
        <button>+</button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <button>Delete item</button>
    </div>
  );
}
