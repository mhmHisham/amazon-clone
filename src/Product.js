import React from 'react'
import './Product.css'

function Product({ id , title , image , price , rating} ) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <strong>{price} </strong>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}

                </div>
            </div>
                <img  src={image}  />
 
                <button >Add to basket</button>
        </div>
    )
}

export default Product
