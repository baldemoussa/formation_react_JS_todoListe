import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; 

class Todos extends Component {

   render() {
    return this.props.todos_param.map((todo_out)=> ( <TodoItem key={todo_out.id} todo_out_item={todo_out} 
        markComplete={this.props.markComplete}   delTodo={this.props.delTodo}      />
            )); 
    } 
}

// PropTypes
Todos.propTypes = {
    todos_param: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
} 

export default Todos;
