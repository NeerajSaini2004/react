import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addTodo() {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: inputValue
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
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
                <br></br>
                <br></br>
                <br></br>

                <hr />
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}