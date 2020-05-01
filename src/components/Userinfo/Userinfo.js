import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Userinfo.css'
const Userinfo = (props) => {
    const {name, email, phone, profession, salary, img} = props.userinfo;
    return (
        <div className="userinfo">
            <div className="user-img">
               <img src={img} alt=""/>
            </div>
            <div className="content">
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Profession: {profession}</h4>
                <h4>Salary: {salary}</h4>
                <button onClick={()=>props.haddleAddUser(props.userinfo)} className="btn-add">  <FontAwesomeIcon icon={faPlus} /> Add To List</button>
            </div>
        </div>
    );
};

export default Userinfo;