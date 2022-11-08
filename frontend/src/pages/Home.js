import { ToDoList } from "../components/ToDoList";
import { ToDoNotes } from "../components/ToDoNotes";

export const Home = () => {

    return (
        <div id="container">
            <div id="toDoWindow">
                <ToDoList />
                <ToDoNotes />
            </div>
        </div>
    )
};