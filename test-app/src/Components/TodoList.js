import React, {useState} from 'react'
import toDo from './toDo'

const TodoList = () => {
    return (
        <div className='toDoList-container'>
            <ul className='toDo-List'>
                <toDo/>
            </ul>
        </div>
    );
}

export default TodoList;