import React from 'react';
import Badge from '../components/badge'

import './styles/badgeNew.css';
import header from '../images/badge-header.svg';
import NavBar from '../components/NavBar'

class BadgeNew extends React.Component {
    render (){
        return (
        <div>
            <NavBar/>
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt=""/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge firstName="Alejandro" lastName="SantaLucia"  twitter="alejandroSanta" jobTitle="Frontend" avatar="https://s.gravatar.com/avatar/56ec0f2ae49345015e6cf9b50d7c5250?s=80"/>
                </div>
            </div>
        </div>

        </div>

            )            
    }        
    
}


export default BadgeNew