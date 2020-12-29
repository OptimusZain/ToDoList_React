import React from "react";

const Form = (props) => {

    const inputHandler = (e) => {
        console.log(e.target.value);
        props.setInputText(e.target.value);
    };

    const toDosHandler = (e) => {
        e.preventDefault();
        props.setToDos([
            ...props.toDos,
            {inputText: props.inputText, completed: false, id: Math.random() * 1000 },
        ]);
        props.setInputText("");
    };

    return (
        <form>
            <input value={props.inputText} type="text" className="todo-input" onChange= {inputHandler}/>
            <button className="todo-button" type="submit" onClick={toDosHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            </form>
    );
}

export default Form;