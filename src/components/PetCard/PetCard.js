import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './PetCard.scss'

const PetCard = () => {
    const [name, setFullname] = useState('Nombre')
    const [animal, setEmail] = useState('email')

    const navigate = useNavigate


    return (
        <div className="Card">
            <div className="upperCard">
                <div className="imageContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuzFZ5rIL1kMLIqJkp5hi8i6vgZdSt69x7A&usqp=CAU" alt="profilePic" height="100px" width="100px"/>
                </div>
            </div>
            <div className="lowerCard">
                <h3>{ animal }</h3>
                <h4>{ name }</h4>
                <button>Ver Humano</button>
            </div>
        </div>
    )
}

export default PetCard