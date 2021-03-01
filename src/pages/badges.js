import React  from 'react';

import {Link} from 'react-router-dom'

import './styles/badges.css';
import confLogo from '../images/badge-header.svg'
// import NavBar from '../components/NavBar';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {
    state= {
        data: undefined,
        loading: true,
        error: null
    }

    componentDidMount (){
        this.fetchData()   ///(*1*)
    }

    fetchData=  async ()=>{
        this.setState({ loading : true, error : null})  ///(*2*)

        try{
            const data = await api.badges.list()
            this.setState({loading: false, data: data})  ///(*3*)

        }catch (error){
            this.setState({loading: false, error: error})  ///(*4*)
        }
    }
    
    render() {
        if (this.state.loading === true){
            return <PageLoading/>
        }
        if (this.state.error ){
            return <PageError error={this.state.error}/> 
        }

        return (
            <div>
                {/* <NavBar/> */}

                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/Badges/New" className="btn btn-primary"> New Badge</Link>
                    </div>

                    <div className="badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />

                            {/* <ul className="list-unstyled">
                                {this.state.data.map( (badge) => {
                                    return (
                                        <li key={badge.id} >


                                            <p>{badge.firstName} {badge.lastName}</p>

                                        </li>
                                    )                                    
                                }
                                )}
                            </ul> */}
                 
                            
                        </div>
                    </div>
 
                </div>
            </div>
        )
    }
    

};




export default Badges