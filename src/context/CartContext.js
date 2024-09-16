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
  return(
    <CartContext.Provider value={{...state}}>
        {children}
    </CartContext.Provider>
  )
};

//การนำเอา Context ไปใช้งานด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};
