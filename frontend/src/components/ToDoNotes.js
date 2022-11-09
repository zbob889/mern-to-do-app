import { Description } from "./Description";
import { DescriptionTitle } from "./DescriptionTitle";
import { useToDosContext } from "../hooks/useToDosContext";

export const ToDoNotes = () => {

    const { currentId } = useToDosContext();

    return (
        <div id="toDoNotes">
            <DescriptionTitle currentId={currentId} />
            <Description currentId={currentId} />
        </div>
    )
}