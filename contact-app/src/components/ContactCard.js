import React from 'react'
import logo from '../images/logo192.png';

const ContactCard = (props) =>{

    const {id , name, email} = props.contact;
    return(
        <div className="item">
            <img className='ui avatar image ' src={logo} alt="user"/>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    <i className="trash alternate outline icon"></i>
                </div>

            </div>
    )
}

export default ContactCard;