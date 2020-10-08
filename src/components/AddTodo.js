import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title : ''
    }
    //accepter les données saisi dans le champ du formulaire
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Add Todo ..." 
                    style={{flex:'10', padding: '5px' }} 
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input 
                    type="submit" 
                    value="OK" 
                    className="btn"
                     style={{flex: '1'}} 
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
} 


export default AddTodo
