import { Description } from "./Description";
import { DescriptionTitle } from "./DescriptionTitle";
import { useToDosContext } from '../hooks/useToDosContext';
import '../styles/ToDoNotes.css';

export const ToDoNotes = () => {

    const { currentToDo } = useToDosContext();


    if(!currentToDo){
        return (
            <div id="description-message">
                <img id="description-img" src="https://www.svgrepo.com/show/239907/select.svg" alt="" />
                <div id="description-message-text">Click task title to view the description</div>
            </div>
        );
    };
    if(currentToDo){
        return (
            <div id="toDoNotes">
                <DescriptionTitle />
                <Description />
            </div>
        );
    };
};