import { useToDosContext } from "../hooks/useToDosContext";

export const DescriptionTitle = () => {

    const { currentToDo } = useToDosContext();

    const title = currentToDo ? currentToDo.title : '';

    return(
        <div id="descriptionTitle">{title}</div>
    )
}