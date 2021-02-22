import React from 'react'

import './styles/NotFound.css'
import ErrorIMG from '../images/404-Error.svg'


function NotFound (){
    return (
        <div className="errorContainer">
            <img className="ErrorIMG" src={ErrorIMG} alt="NotFound"/>
        </div>
      
    )

}

export default NotFound