
export const ToDoItem = (props) => {

    const title = props.toDo.title;

    return(
        <div className="toDoItem">
            <input type="checkbox" />
            <input 
                type="text" 
                className="projectName"
                value={title}
            />
        </div>
    )
};