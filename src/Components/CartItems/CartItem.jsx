import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItem() {

    const { getTotalCartAmount,all_product,cartItem,removeCart} = useContext(ShopContext)

  return (
    <div className="cartitem">
        <div className="cartitem-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return(
                <div className="cartitem-format cartitem-main">
                    <img src={e.image} alt="" className="cartitem-product-icon "/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitem-quantity">{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className="cartitems-remove-icon "src={remove_icon} onClick={()=>{removeCart(e.id)}} alt="" />
                </div>
                
                )
            }
            return null
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${ getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${ getTotalCartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            
        </div>
        <hr />      
    </div>
  )
}

export default CartItem