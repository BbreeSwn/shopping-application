import Item from "./Item";
import {useCart} from "../context/CartContext"

export default function Cart() {
    const {products,total,formatMoney} = useCart()
  return (
    <div className="cart">
      <h1 style={{textAlign:"center"}}>Total : {formatMoney(total)} bath</h1>
        {products.map((data)=>{
            return <Item key={data.id} {...data} />
        })}
    </div>
  )
}
