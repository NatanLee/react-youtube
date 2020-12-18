import React, {useState} from 'react';

function AddTodo() {
    const [value, setValue] = useState('');
    return(
        <form style = {{marginBottom: '1rem'}} onSubmit = {submitHandler}>
            <input value = {value} onChange = {event => setValue(event.target.value)}  />
            <button type = "submit">Add todo</button>
        </form>
    )
}

export default AddTodo;