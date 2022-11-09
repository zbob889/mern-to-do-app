import { ToDoContext } from "../context/ToDoContext";
import { useContext} from "react";

export const useToDosContext = () => {
    const context = useContext(ToDoContext);

    if(!context){
        throw Error('useToDosContext must be used inside a ToDosContextProvider');
    };

    return context;
};