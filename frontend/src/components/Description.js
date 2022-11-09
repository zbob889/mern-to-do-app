import { useToDosContext } from "../hooks/useToDosContext";

export const Description = () => {

    const { currentToDo, dispatch } = useToDosContext();


    const defaultDescription = currentToDo ? currentToDo.description : '';

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
            dispatch({type: 'SET_TODO', payload: json});
        };
    };

    return(
        <div id="Description">
            <form id="">
                <input 
                    type="text"
                    id="description-box"
                    defaultValue={defaultDescription}
                    onBlur={handleDescriptionChange}
                />
            </form>
        </div>
    )
}