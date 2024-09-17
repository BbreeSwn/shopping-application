import products from "../data/Product";

const cartReducer = (state, action) => {
  //กระบวนการจัดการ State ผ่าน Action
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalprice = price * quantity; // ยอดรวมสินค้าแต่ละรายการ
        cartTotal.total += totalprice; // จำนวนเงินรวม
        cartTotal.amount += quantity; // ปริมาณเงินรวม
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    );
return {
    ...state,
    total,
    amount
}
  }

  // สร้าง action remove item
  if(action.type === "REMOVE" ){
    return{
      ...state,
      products:state.products.filter((item)=>item.id !== action.payload)
    }
  }
};

export default cartReducer;
