import React from 'react';
import Badge from '../components/badge'

import './styles/badgeNew.css';
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg';
import NavBar from '../components/NavBar'

class BadgeNew extends React.Component {
    state= { form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }}

    handleChange = e => {
        this.setState ({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    render (){
        return (
        <div>
            <NavBar/>
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt=""/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                    firstName={this.state.form.firstName} 
                    lastName={this.state.form.lastName} 
                    twitter={this.state.form.twitter}  
                    jobTitle={this.state.form.jobTitle}  
                    email={this.state.form.email}  
                    avatar="https://s.gravatar.com/avatar/56ec0f2ae49345015e6cf9b50d7c5250?s=80"/>
                </div>
                <div className="col-6">
                    <BadgeForm 
                    onChange={this.handleChange} 
                    formValues={this.state.form }
                    />
                </div>
            </div>
        </div>

        </div>

            )            
    }        
    
}


export default BadgeNew