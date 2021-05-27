import React from 'react'; 
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
           <div className="home__container">
                  <img className="home__banner" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" 
                  alt="" 
                  />   

                <div className="home__row">
                    <Product 
                        id = '0001'
                        title = 'The lean startup'
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating = {4}
                    />           
                </div>

                <div className="home__row">
                    <Product 
                        id = '0002'
                        title = 'Eversecu Mini PTZ Camera RS485 HD Analog 1080P 4X Zoom(2.8-12mm) 65ft IR Distance Outdoor High Speed Dome Camera IP66 Weatherproof Full Metal Vandalproof PTZ Camera'
                        price = {79.99}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/51nzQICmgDL._AC_SL1000_.jpg'
                        rating = {4}
     />
                    <Product
                    id = '0003'
                    title = 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls'
                    price = {39.99}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg'
                    rating = {5}
                    />
                               
                </div>

                <div className="home__row">
                    <Product
                    id = '0001'
                    title = 'The lean startup'
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating = {4}
                    /> 
                    <Product
                        id = '0002'
                        title = 'Eversecu Mini PTZ Camera RS485 HD Analog 1080P 4X Zoom(2.8-12mm) 65ft IR Distance Outdoor High Speed Dome Camera IP66 Weatherproof Full Metal Vandalproof PTZ Camera'
                        price = {79.99}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/51nzQICmgDL._AC_SL1000_.jpg'
                        rating = {4}
                    />
                    <Product
                    id = '0003'
                    title = 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls'
                    price = {39.99}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg'
                    rating = {5}
                    /> 
                </div>
            </div>

           
        </div>
    )
}
 
export default Home;
