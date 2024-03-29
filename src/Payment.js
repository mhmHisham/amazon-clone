
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import axios from './axios';
import React , {useEffect, useState} from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { db } from './firebase';

function Payment() {

    const [{basket , user} , dispatch] =useStateValue();
    const history =useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded , setSucceeded] = useState(false);
    const [processing ,setProcessing] =useState("")
    const [error , setError] = useState(null);
    const [disabled , setDisabled] = useState(true);
    const [clientSecret , setClientSecret] = useState(true);

    useEffect(() => { 
        //generate the special stripe secret which allows us to change a customer
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url :`/payments/create?total=${getBasketTotal(basket) *100}` //stripe expect total in a currencies subunits in $ so we * 100
            });
            setClientSecret(response.data.clientSecret);   
        }
        getClientSecret();        
    }, [basket]) 

    console.log('The secret is >>>' , clientSecret)


    const handleSubmit =async (event) => {
         //stripe stuff
         event.preventDefault();
         setProcessing(true); 

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method:{    
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent -- conform payments  

            db.collection('users')
            .doc(user?.uid)
            .collection('orders') 
            .doc(paymentIntent.id)
            .set({
                basket :basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders');         
        });
    }

    const handleChange = (event) => {
         //listen for change in the cardElement
         //show any errors as the card details cistomer types

         setDisabled(event.empty);
         setError(event.error ? event.error.message : "" );  
    }
    return (
       <div className="payment">
           <div className="payment__container">
               {/* Delivery action*/ }
               <h1>
                    Checkout (<Link to ="/checkout">{basket?.length} items</Link>)
               </h1>
               
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>125/1 , Main Street</p>
                        <p>Pothuhera , Alahitiyawa</p>
                    </div>
                </div>

               {/* Reviewing items*/ }
               <div className="payment__section">
                    <div className="payment__title">
                            <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__items">
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
               {/* Payment*/ }
               <div className="payment__section">
                   <div className="payment__title">
                           <h3>Payment Method</h3>
                   </div>
                   <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText ={(value) => (
                                        <h3> Order Total : {value}</h3>
                                    )}
                                    decimalScale = {2}
                                    value={getBasketTotal(basket)}
                                    displayType ={"text"}
                                    thousandSeprator = {true}
                                    prefix={"$"}   
                                />
                                <button disabled={processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> :
                                        " Buy Now" }
                                    </span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error }</div>}
                        </form>

                   </div>
                </div>
           </div>
       </div>
    )
}

export default Payment
