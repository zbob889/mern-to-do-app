import { useToDosContext } from '../hooks/useToDosContext';

export const ToDoItem = (props) => {

    const title = props.toDo.title;
    const docId = props.toDo._id;

    const { dispatch } = useToDosContext();

    const handleChange = async (e) => {
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

    return(
        <div className="toDoItem">
            <input type="checkbox"
                onChange={handleChange} 
            />
            <input 
                type="text"
                className="projectName"
                value={title}
                id={docId}
            />
        </div>
    )
};