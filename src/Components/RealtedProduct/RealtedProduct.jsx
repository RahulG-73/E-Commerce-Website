import React from 'react'
import './RealtedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

function RealtedProduct() {
  return (
    <div className="realtedproduct">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RealtedProduct