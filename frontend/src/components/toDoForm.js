import { useState } from 'react';

export const ToDoForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let toDo = {title, description};

        const response = await fetch('/api/toDos', {
            method: 'POST',
            body: JSON.stringify(toDo),
            headers: {
                'Content-Type': 'application/json'
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
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
};