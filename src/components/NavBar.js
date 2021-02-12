import React from 'react';

import './styles/NavBar.css'
import logo from '../images/logo.svg';


class NavBar extends React.Component {
    render (){
        return (
        <div className="Navbar">
            <div className="container-fluid">
            <a className="Navbar__brand" href="/">
                <img  className="Navbar__brand-logo" src={logo} alt=""/>
                <sapan className="font-weight-light">Platzi</sapan>
                <sapan className="font-weight-bold">Conf</sapan>
            </a>
            </div>
        </div>
        
        )           
    }         
}


export default NavBar