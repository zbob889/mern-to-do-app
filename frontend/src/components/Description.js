import { useToDosContext } from "../hooks/useToDosContext";
import { useState, useEffect } from "react";
import '../styles/Description.css';

export const Description = () => {

    const { currentToDo, dispatch } = useToDosContext();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const description = currentToDo ? currentToDo.description : '';
        setInputValue(description);
    }, [currentToDo]);

    const handleOnChange = (e) => {
        setInputValue(e.value);
    };

    const handleDescriptionChange = async (e) => {
        const newDescription = {"description": `${e.target.value}`};

        const response = await fetch(`/api/toDos/${currentToDo._id}`, {
            method: 'PATCH',
            body: JSON.stringify(newDescription),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            console.log('error')
        };
        if(response.ok){
            dispatch({type: 'UPDATE_CURRENT_TODO_DESCRIPTION', payload: `${e.target.value}`});
        };
    };


    if(!currentToDo){
        return(
        <div id="Description">
        </div>
    );
    };
    if(currentToDo){
        return(
            <div id="Description">
                <form id="description-form">
                    <textarea 
                        type="text"
                        id="description-box"
                        value={inputValue}
                        placeholder="Description"
                        onChange={handleOnChange}
                        onBlur={handleDescriptionChange}
                    />
                </form>
            </div>
        );  
    };
};