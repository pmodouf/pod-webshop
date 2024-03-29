import React, { useContext } from "react"
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import {useNavigate} from "react-router-dom"
export const Cart=()=>{
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()

    return (
     <div className="cart">
        <div>
            <h1>
                Cart Items
            </h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !==0){
                    return <CartItem data={product}/>
                }
            })}
        </div>
        {totalAmount>0?

        <div className="checkout">
            <p> Subtotalt: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}> Continue Shopping</button>
            <button> Checkout </button>
            
        </div>
 : <h1>The Cart Is Empty</h1>}
    </div>
    );
}