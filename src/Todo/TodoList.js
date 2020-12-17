import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles =  {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0 

    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, idx) => {
                return <TodoItem todo = {todo} key = {todo.id} idx = {idx}/>
            })}          
        </ul>
    )
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;