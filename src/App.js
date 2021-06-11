import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise =loadStripe(
  'pk_test_51IxnB8HcO9uegdC5Cg3ZWPkjGTOO3cDhMBs1jcaG5kM6a1OjD2y3TB5Ga0ES2nb3pimFkuaOzsb4ne83go9jBwdM00QyK6YnOw'
  );

function App() {  
  const [{} , dispatch] =useStateValue();

  useEffect( () =>{

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>' ,authUser);

      if(authUser){
        //the use is logged in / the use was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  },[])

  return (
    <Router>
      <div className="app">
     
        <Switch>

          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>      
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>  
            </Elements>
          </Route>
            
          <Route path="/">
            <Header/>          
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

 