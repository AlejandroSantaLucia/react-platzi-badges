import React from 'react'
import './styles/badgesList.css'


class BadgesList extends React.Component{
 render (){
     return (
        <ul className="list-unstyled">
        {this.props.badges.map( (badge) => {
            return (
                <li key={badge.id} >
                    <div className="badgesList__container">
                        <img className="badgesList__avatar" src={badge.avatarUrl} alt="Avatar"/>
                        <div className="badgesList_details">
                            <h3>{badge.firstName} {badge.lastName}</h3>
                            <h5>{badge.jobTitle}</h5>
                            <p className="badgesList__social">Email: {badge.email}</p>
                            <p className="badgesList__social">Twitter: {badge.twitter}</p>
                        </div>
                    </div>
                </li>
            )                                    
        }
        )}
    </ul>

     )
 }


};

export default BadgesList;