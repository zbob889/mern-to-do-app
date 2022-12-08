import { useToDosContext } from '../hooks/useToDosContext';

export const ToDoItem = (props) => {

    const title = props.toDo.title;
    const docId = props.toDo._id;

    const { dispatch } = useToDosContext();

    const handleCheckbox = async (e) => {
        if(e.target.checked){
            // delete doc with _id docId
            const response = await fetch(`/api/toDos/${docId}`, {
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

        const response = await fetch(`/api/toDos/${docId}`, {
            method: 'PATCH',
            body: JSON.stringify(newTitle),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok){
            console.log('error')
        };
        if(response.ok){
            dispatch({type: 'SET_TODO', payload: json});
        };
    };

    const handleFocus = async () => {

        const response = await fetch(`/api/toDos/${docId}`);
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'CHANGE_CURRENT_TODO', payload: json});
        };
    };

    return(
        <div className="toDoItem">
            <input type="checkbox"
                onChange={handleCheckbox} 
            />
            <input 
                type="text"
                className="projectName"
                defaultValue={title}
                id={docId}
                onBlur={handleTitleChange}
                onFocus={handleFocus}
            />
        </div>
    )
};