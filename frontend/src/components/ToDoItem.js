import { useToDosContext } from '../hooks/useToDosContext';
import '../styles/ToDoItem.css';

export const ToDoItem = (props) => {

    const title = props.toDo.title;
    const docId = props.toDo._id;

    const { dispatch } = useToDosContext();

    const handleCheckbox = async (e) => {
        if(e.target.checked){
            const response = await fetch(`${process.env.PORT}/api/toDos/${docId}`, {
                method: 'DELETE',
            });

            const json = await response.json();

            if(!response.ok){
                console.log('error')
            };
            if(response.ok){
                dispatch({type: 'DELETE_TODO', payload: json});
            };
        };
    };

    const handleTitleChange = async (e) => {
        const newTitle = {"title": `${e.target.value}`};

        const response = await fetch(`${process.env.PORT}/api/toDos/${docId}`, {
            method: 'PATCH',
            body: JSON.stringify(newTitle),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            console.log('error')
        };
        if(response.ok){
            dispatch({type: 'UPDATE_CURRENT_TODO_TITLE', payload: `${e.target.value}`});
        };
    };

    const handleFocus = async () => {

        const response = await fetch(`${process.env.PORT}/api/toDos/${docId}`);
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'CHANGE_CURRENT_TODO', payload: json});
        };
    };

    return(
        <div className="toDoItem">
            <input type="checkbox"
                className="checkbox"
                onChange={handleCheckbox} 
            />
            <input 
                type="text"
                className="projectName"
                defaultValue={title}
                id={docId}
                onChange={handleTitleChange}
                onFocus={handleFocus}
            />
        </div>
    )
};