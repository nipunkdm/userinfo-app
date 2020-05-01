import React, { useState } from 'react';
import './Content.css';
import Userinfo from '../Userinfo/Userinfo';
import User from '../../userData/users';
import Cart from '../Cart/Cart';
const Content = () => {
    const data = User.slice(0,15);
    const [user, setUser] =  useState(data);
    const[cart, setCart] = useState([]);
    const haddleAddUser = (users) =>{
            console.log("click",users);
            const newCart =[...cart, users];
            setCart(newCart);
    }
    return (
        <div className="user-container">
            <div className="user-content">
                {
                    user.map(
                        user=><Userinfo
                        userinfo = {user}
                        haddleAddUser = {haddleAddUser}
                        >
                        </Userinfo>
                    )
                }
                
            </div>
            <div className="cart">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Content;