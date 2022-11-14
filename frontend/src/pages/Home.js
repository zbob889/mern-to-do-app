import { ToDoList } from "../components/ToDoList";
import { ToDoNotes } from "../components/ToDoNotes";
import { useToDosContext } from "../hooks/useToDosContext";


export const Home = () => {

    const { currentToDo, dispatch } = useToDosContext();

    const setCurrentToDoOnClick = (e) => {

        // #descriptionTitle #description-box .toDoItem

        if(e.target.id !== 'descriptionTitle' && e.target.id !== 'description-box' && e.target.className !== 'projectName'){
            // dispatch({type:'CHANGE_CURRENT_TODO', payload: null});
        };
    };

    return (
        <div id="container" onClick={setCurrentToDoOnClick}>
            <div id="toDoWindow">
                <ToDoList />
                <ToDoNotes />
            </div>
        </div>
    )
};