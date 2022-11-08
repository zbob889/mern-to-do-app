import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoDisplay = () => {
    const [toDos, setToDos] = useState(null);

    useEffect(() => {
        const fetchToDos = async () => {
            const response = await fetch('/api/toDos');
            const json = await response.json();

            if(response.ok){
                setToDos(json);
            };
        };

        fetchToDos();
    }, []);

    return (
        <div id="toDoDisplay">

            <label for="check" class="projectButton">To-Dos</label>
            <input type="checkbox" class="projectCheck" id="check" />
            <div class="projectContent" id="miscProject">
                {toDos && toDos.map(toDo => (
                    <ToDoItem toDo={toDo} key={toDo._id} />
                ))}
            </div>

        </div>
    )
};