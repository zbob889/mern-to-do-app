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
        default:
            return state
    };
};

export const ToDoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toDosReducer, {
        toDos: null
    });


    return (
        <ToDoContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ToDoContext.Provider>
    )
};