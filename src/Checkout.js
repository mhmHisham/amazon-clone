import { Button } from '@material-ui/core'
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {

    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                 <img className="checkout__ad"
                    src="https://cedcommerce.com/blog/wp-content/uploads/2019/05/amazon-blog-banner.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your shopping basket   
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                        id ={item.id}
                        title ={item.title}
                        price = {item.price}
                        rating ={item.rating}
                        image ={item.image}
                        />
                    ))}
                 
                </div> 
            </div>

            <div className="checkout__right">

                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout
