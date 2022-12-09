import { useState } from 'react';
import { useToDosContext } from '../hooks/useToDosContext';

export const ToDoForm = () => {

    const { dispatch } = useToDosContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let toDo = {title, description};

        const response = await fetch(`https://mern-to-do-app-production.up.railway.app/api/toDos`, {
            method: 'POST',
            body: JSON.stringify(toDo),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"  
            }
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        };
        if(response.ok){
            setError(null);
            setTitle('');
            console.log('new to-do added:', json);
            dispatch({type: 'CREATE_TODO', payload: json});
        };
    };

    return (
        <div id="toDoSubmit">
            <form id="formBox" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="submitBox"
                    placeholder="Add a task to your To-Do list..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
    )
};