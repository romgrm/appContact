import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../Context'

export default class AddContact extends Component {

    state = {
        nom: '',
        prenom: '',
        mail: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value // [event.target.name] -> récupère tous les 'name' des inputs (donc nom,prenom,mail). event.target.valuue -> récupère tous les 'value' des inputs.
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        
    }
    render() {

        return (
            <Consumer>
                {value =>{
                    return(

                    )
                }}
            </Consumer>
        )
        return (
            
        )
    }
}
