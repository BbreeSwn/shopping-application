import { useCart } from "../context/CartContext"
import "./Header.css"

export default function Header() {
  const {amount} = useCart()
  return (
    <div>
        <header>
            <p>Shopping Application</p>
            <p>Shopping cart : {amount }</p>
        </header>
    </div>
  )
}
