import { useEffect } from "react";
import { useToDosContext } from '../hooks/useToDosContext';
import { ToDoItem } from "./ToDoItem";
import '../styles/ToDoDisplay.css';

export const ToDoDisplay = () => {
    const { toDos, dispatch } = useToDosContext();

    useEffect(() => {
        const fetchToDos = async () => {
            const response = await fetch(`${process.env.REACT_APP_PORT}/api/toDos`);
            const json = await response.json();

            if(response.ok){
                dispatch({type: 'SET_TODOS', payload: json});
            };
        };

        fetchToDos();
    }, [dispatch]);

    return (
        <div id="toDoDisplay">

            <div className="toDos">To-Dos</div>
            <div className="toDosContent" id="miscProject">
                {toDos && toDos.map(toDo => (
                    <ToDoItem toDo={toDo} key={toDo._id} />
                ))}
            </div>

        </div>
    )
};