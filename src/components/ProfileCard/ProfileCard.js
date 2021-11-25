import React, { useState } from 'react'
import './ProfileCard.scss'

const ProfileCard = () => {
    const [fullName, setFullname] = useState('Nombre')
    const [email, setEmail] = useState('email')
    const [phoneNumber, setPhoneNumber] = useState('phoneNumber')


    return (
        <div className="Card">
            <div className="upperCard">
                <div className="imageContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuzFZ5rIL1kMLIqJkp5hi8i6vgZdSt69x7A&usqp=CAU" alt="profilePic" height="100px" width="100px"/>
                </div>
            </div>
            <div className="lowerCard">
                <h3>{ fullName }</h3>
                <h4>{ email }</h4>
                <h4>{ phoneNumber }</h4>
                <button>Ver Mascotas</button>
            </div>
        </div>
    )
}

export default ProfileCard
