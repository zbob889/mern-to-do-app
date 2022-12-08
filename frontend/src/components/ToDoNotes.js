import { Description } from "./Description";
import { DescriptionTitle } from "./DescriptionTitle";
import { useToDosContext } from '../hooks/useToDosContext';
import '../styles/ToDoNotes.css';

export const ToDoNotes = () => {

    const { currentToDo, dispatch } = useToDosContext();


    if(!currentToDo){
        return (
            <div id="toDoNotes">
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