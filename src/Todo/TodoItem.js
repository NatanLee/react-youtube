import React from 'react';

export default function TodoItem({todo, idx}){
    return <li><strong>{idx + 1}</strong>{todo.title}</li>;
}