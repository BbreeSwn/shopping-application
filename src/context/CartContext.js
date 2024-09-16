import { createContext, useContext, useReducer } from "react";
import products from "../data/Product";
import cartReducer from "../reducer/cartReducer";

//สร้าง context
const CartContext = createContext();
const initState = {
  products,
  total: 0,
  amount: 0,
};

// children เป็นตัวแทนของ component ต่างๆ
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  function formatMoney(money){
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return(
    <CartContext.Provider value={{...state,formatMoney}}>
        {children}
    </CartContext.Provider>
  )
};

//การนำเอา Context ไปใช้งานด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};
