import React, { Component } from 'react'
import Contact from './Contact'

export default class AddContact extends Component {

    state = {
        nom: '',
        prenom: '',
        mail: ''
    }

    onChange=(event) => {
        this.setState({
            name: event.target.value,
        })
    }

    onSubmit=(event)=> {
        this.setState({
            
        }, console.log(this.state.nom))
    }
    render() {
        return (
            <div className="card text-center">
                <div className=" card-header">Ajouter un contact</div>
                
                <div className="card-body">
                    <form>

                    </form>
                </div>
                
            </div>
        )
    }
}
