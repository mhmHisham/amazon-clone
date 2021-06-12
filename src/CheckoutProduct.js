import React, { useState } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';

function CheckoutProduct({id , image , title , price , rating , hideButton}) {
    const [{basket} , dispatch] = useStateValue();
    const [isFadingOut, setIsFadingOut] = useState(false);

    const fadeOut = ()=>{
        setIsFadingOut(true);
       
      }
    
    const removeFromBasket =() => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,          
        });
        setIsFadingOut(false);
    }

    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct__image" src={image} alt="" />

                <div className={isFadingOut ? "remove__CheckoutProduct" : "checkoutProduct__info" }>
                    <p className="checkoutProduct__title">
                        {title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) =>(
                            <p>⭐</p>
                        ))}
                    </div>
                    
                    {!hideButton && (
                        <button className='button_remove' onClick={()=>fadeOut(setTimeout(()=>removeFromBasket(),300))} >Remove from bucket</button>      
                    )}
                </div>
            
        </div>
    )
}

export default CheckoutProduct
