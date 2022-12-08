import { useToDosContext } from "../hooks/useToDosContext";
import { useEffect, useState } from "react";
import '../styles/DescriptionTitle.css';

export const DescriptionTitle = () => {

    const { currentToDo } = useToDosContext();

    // const title = currentToDo ? currentToDo.title : '';

    const [title, setTitle] = useState('');

    useEffect(() => {
        const newTitle = currentToDo ? currentToDo.title : '';
        setTitle(newTitle);
    }, [currentToDo]);

    return(
        <div id="descriptionTitle">{title}</div>
    )
}