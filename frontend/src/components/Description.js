import { useToDosContext } from "../hooks/useToDosContext";
import { useState, useEffect } from "react";

export const Description = () => {

    const { currentToDo, dispatch } = useToDosContext();

    const [inputValue, setInputValue] = useState('');
    
    // if(currentToDo){
    //     setInputValue(currentToDo.description);
    // };

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
            console.log(json);
            dispatch({type: 'SET_TODO', payload: json});
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