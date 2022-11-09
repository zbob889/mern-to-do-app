import { createContext, useReducer } from "react";

export const ToDoContext = createContext();

export const toDosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                toDos: action.payload
            }
        case 'CREATE_TODO':
            return {
                toDos: [action.payload, ...state.toDos]
            }
        case 'DELETE_TODO':
            return {
                toDos: state.toDos.filter((toDo) => toDo._id !== action.payload._id)
            }
        case 'CHANGE_CURRENT_TODO':
            return {
                toDos: state.toDos,
                currentToDo: action.payload
            }
        default:
            return state
    };
};

export const ToDoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toDosReducer, {
        toDos: null,
        currentToDo: null
    });


    return (
        <ToDoContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ToDoContext.Provider>
    )
};