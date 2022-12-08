import { useToDosContext } from "../hooks/useToDosContext";
import { useState, useEffect } from "react";

export const Description = () => {

    const { currentToDo, dispatch } = useToDosContext();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const description = currentToDo ? currentToDo.description : '';
        setInputValue(description);
    }, [currentToDo]);

    const handleOnChange = (e) => {
        console.log('handleOnChange fired');
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

        const json = await response.json();

        if(!response.ok){
            console.log('error')
        };
        if(response.ok){
            console.log('to-do description updated:', json);
            dispatch({type: 'UPDATE_CURRENT_TODO_DESCRIPTION', payload: `${e.target.value}`});
            console.log(currentToDo);
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
                <form>
                    <input 
                        type="text"
                        id="description-box"
                        value={inputValue}
                        onChange={handleOnChange}
                        onBlur={handleDescriptionChange}
                    />
                </form>
            </div>
        );  
    };
};