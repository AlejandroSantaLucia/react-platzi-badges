import React from 'react';
import Badge from '../components/badge'

import './styles/badgeNew.css';
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg';
import api from '../api'
import PageLoadign from '../components/PageLoading'
// import NavBar from '../components/NavBar'

class BadgeNew extends React.Component {
    state= { 
        loading: false,
        error: null,

        form:{
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

    handleSubmit = async e =>{ 
        e.preventDefault();  
        this.setState( {loading: true, error: null})

        try {
            await api.badges.create(this.state.form);
            this.setState( {loading: false})  
            this.props.history.push('/badges')  //* redireccion a la pag badges.js

        } catch (error){
            this.setState( {loading: false, error: error})
        }
    }

    render (){
        if(this.props.loading){
            return<PageLoadign/>
        }
        return (
        <div>
            {/* <NavBar/> */}
        <div className="BadgeNew__hero">
            <img className=" BadgeNew__hero-image img-fluid" src={header} alt=""/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                    firstName={this.state.form.firstName  || 'First Name'} 
                    lastName={this.state.form.lastName || 'Last Name'} 
                    twitter={this.state.form.twitter  || 'Twitter'}  
                    jobTitle={this.state.form.jobTitle || 'Jobtitle'}  
                    email={this.state.form.email || 'Email'}  
                    avatar="https://s.gravatar.com/avatar/56ec0f2ae49345015e6cf9b50d7c5250?s=80"/>
                </div>
                <div className="col-6">
                <h1>New Attendant</h1>
                    <BadgeForm 
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit} //este es la prop que agregamos
                    formValues={this.state.form }
                    error={this.state.error}
                    />
                </div>
            </div>
        </div>

        </div>

            )            
    }        
    
}


export default BadgeNew