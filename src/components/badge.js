import React from 'react';

import './styles/badge.css'
import confLogo from '../images/platziconf-logo.svg';
// import avatar from '../images/avatar.jpeg';

class Badge extends React.Component {  // creamos el componente Badge que se extiende como un React.component
    render(){ // siempre usamos render para poder aplicar los componentes en pantalla
        return <div className="badge">
            <div className="badge_header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="badge_section-name">
                <img className="badge_avatar" src={this.props.avatar} alt="Avatar"/>
                <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
            </div>
            <div className="badge_section-info">
                <h3> {this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="badge_footer">
                #PlatziConf
            </div>
            
        </div>

    }

}



export default Badge; //para asegurarnos que exporte el componente
