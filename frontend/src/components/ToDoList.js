import { ToDoForm } from "./toDoForm";
import { ToDoDisplay } from "./ToDoDisplay";

export const ToDoList = () => {

    return(
        <div id="toDoLists">
            <div id="toDoTitle">
                To-Do Lists
            </div>
            <ToDoForm />
            <ToDoDisplay />
        </div>
    )
}