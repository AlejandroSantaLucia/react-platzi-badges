import React from 'react'
import './styles/badgesList.css'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'


class BadgesList extends React.Component{
 render (){
     if (this.props.badges.length === 0 ) {
         return (
             <div>
                 <h3>No se ha encontrado ningún badge</h3>
                 <Link className='btn btn-primary' to= '/badges/new'>
                     Crear nuevo badge
                 </Link>
             </div>
         )
     }
     return (
        <ul className="list-unstyled">
        {this.props.badges.map( (badge) => {
            return (
                <li key={badge.id} >
                    <Link  to={`/badges/${badge.id}`}   //* este es el Ling que agregamos
                    className="text-reset text-decoration-none">  
                        <div className="badgesList__container">
                            <Gravatar className="badgesList__avatar" email={badge.email} alt="Avatar"/>
                            <div className="badgesList_details">
                                <h3>{badge.firstName} {badge.lastName}</h3>
                                <h5>{badge.jobTitle}</h5>
                                <p className="badgesList__social">Email: {badge.email}</p>
                                <p className="badgesList__social">Twitter: {badge.twitter}</p>
                            </div>                        
                        </div>
                    </Link>  
                </li>
            )                                    
        }
        )}
    </ul>

     )
 }


};

export default BadgesList;