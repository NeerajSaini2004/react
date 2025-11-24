import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addTodo() {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: inputValue,
                isDone: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleDone(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    }

    function uppercaseOne(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, text: todo.text.toUpperCase()} : todo
        ));
    }

    function uppercaseAll() {
        setTodos(todos.map(todo => 
            ({...todo, text: todo.text.toUpperCase()})
        ));
    }

    return (
        <div>
            <h2>Todo App</h2>
            <div>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a todo"
                />
                <br></br>
                <button onClick={addTodo}>Add</button>
                <button onClick={uppercaseAll}>Uppercase All</button>
                <br></br>
                <br></br>
                <br></br>

                <hr />
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
                        {todo.text}
                        <button onClick={() => toggleDone(todo.id)}>
                            {todo.isDone ? 'Undo' : 'Done'}
                        </button>
                        <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}