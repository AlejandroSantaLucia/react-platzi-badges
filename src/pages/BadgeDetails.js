import React from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgeDetail.css'

import ConfLogo from '../images/platziconf-logo.svg'
import Badge from '../components/badge'


function BadgeDetails (props){
    const badge = props.badge
    return(        
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={ConfLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1> {badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>                        
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        josTitle={badge.josTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <Link className=" btn btn-primary mb-4" to={`/Badges/${badge.id}/edit`}>
                            Edit 
                            </Link>
                        </div>
                        <div>
                            <button className=" btn btn-danger ">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BadgeDetails