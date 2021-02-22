import React from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgeStart.css'
import platziconf from '../images/platziconf-logo.svg'
// import BadgeNew from '../pages/badgeNew'

class BadgeStart extends React.Component {
    render (){
        return(
            <div className="BadgeStart__Container">
                <div className="BadgesStart__new">
                    <img src={platziconf} alt="conf logo"/>
                    <div className="BadgeStart__detail-ontainer">
                        <h2 className="font-weight-bold">print your badges</h2>
                        <p>The easiest way to managge your conference</p>
                    </div>
                    <div className="button-container">
                        <Link to="/badges">
                         <button className="btn btn-primary"> Start Now</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default BadgeStart