import { useToDosContext } from "../hooks/useToDosContext";

export const DescriptionTitle = ({ currentId }) => {

    const { currentToDo } = useToDosContext();

    const title = currentToDo ? currentToDo.title : '';

    return(
        <div id="descriptionTitle">{title}</div>
    )
}