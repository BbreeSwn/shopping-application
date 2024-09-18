import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/Product";
import cartReducer from "../reducer/cartReducer";

//สร้าง context
const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amount: 0,
};

// children เป็นตัวแทนของ component ต่างๆ
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // ลบสินค้าออกจากตะกร้า
  function removeItem(id) {
    console.log("delete item = " + id);
    dispatch({ type: "REMOVE", payload: id });
  }

  // เพิ่มปริมาณสินค้า
function addQuantity(id){
console.log("add quantity = " +id);
dispatch({type:"ADD" , payload:id})
}

// ลดปริมาณสินค้่าในตะกร้า
function decreaseQuantity(id){
  console.log("decrease quantity = " +id);
  dispatch({type:"DECREASE" , payload:id})
  }


  // คำนวนราคารวมของสินค้า
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
    console.log("TOTAL CALCULATE");
  }, [state.products]);

  //ส่ง function ออกไปใช้งาน ผ่าน cartContext.Provider
  return (
    <CartContext.Provider value={{ ...state, formatMoney, removeItem , addQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

//การนำเอา Context ไปใช้งานด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};
