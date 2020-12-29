import './App.css';
import React, {useState} from 'react'
import Form from "./Components/Form.js"
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Ed's todo List</h1>
      </header>
    <Form inputText={inputText} setInputText= {setInputText} toDos={toDos} setToDos={setToDos}/>
    <TodoList/>
    </div>
  );
}

export default App;
