import {creatContext , useContext}  from "react"
import products from "../data/Product"

//สร้าง context
const CartContext = creatContext()

//การนำเอา Context ไปใช้งานด้านนอก
export const useCart=()=>{
    return useContext(CartContext)
}