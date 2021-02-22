import React from 'react'

import './styles/home.css'
import Astronautas from '../images/astronauts.svg'
import BadgeStart from '../components/BadgeStart'


class Home extends React.Component {
    render (){
        return (
            <div className="home__container">
                <BadgeStart/>

                <img src={Astronautas} alt="astronautas"/>
            </div>

        )
    } 

    
}

export default Home