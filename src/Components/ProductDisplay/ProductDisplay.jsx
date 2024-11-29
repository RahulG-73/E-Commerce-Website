import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


function ProductDisplay(props) {
    const {product}=props
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={ star_icon} alt="" />
                <img src={ star_icon} alt="" />
                <img src={ star_icon} alt="" />
                <img src={ star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-price-old">${product.old_price}</div>
                <div className="productdisplay-price-new">${product.new_price}</div>
            </div>
           
            <p>A light weight usualy knitted,pullpower shirt, close-fitting and with a round neckline and a short sleeves worn as outer garment.</p>
            
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                     <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="product-category"><span>Category :</span>Women , T-Shirt , Crop-Top</p>
            <p className="product-category"><span>Tags :</span>Morden , Latest</p>
        
        </div>


    </div>
  )
}

export default ProductDisplay