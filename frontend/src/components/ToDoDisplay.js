import { useEffect } from "react";
import { useToDosContext } from '../hooks/useToDosContext';
import { ToDoItem } from "./ToDoItem";

export const ToDoDisplay = () => {
    const { toDos, dispatch } = useToDosContext();

    useEffect(() => {
        const fetchToDos = async () => {
            const response = await fetch('/api/toDos');
            const json = await response.json();

            if(response.ok){
                dispatch({type: 'SET_TODOS', payload: json});
            };
        };

        fetchToDos();
    }, [dispatch]);

    console.log(toDos);


    return (
        <div id="toDoDisplay">

            <label for="check" className="projectButton">To-Dos</label>
            <input type="checkbox" className="projectCheck" id="check" />
            <div className="projectContent" id="miscProject">
                {toDos && toDos.map(toDo => (
                    <ToDoItem toDo={toDo} key={toDo._id} />
                ))}
            </div>

        </div>
    )
};