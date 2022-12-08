import { createContext, useReducer } from "react";

export const ToDoContext = createContext();

export const toDosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                toDos: action.payload,
                currentToDo: state.currentToDo
            }
        case 'CREATE_TODO':
            return {
                toDos: [action.payload, ...state.toDos],
                currentToDo: state.currentToDo
            }
        case 'DELETE_TODO':
            return {
                toDos: state.toDos.filter((toDo) => toDo._id !== action.payload._id),
                currentToDo: state.currentToDo
            }
        case 'CHANGE_CURRENT_TODO':
            return {
                toDos: state.toDos,
                currentToDo: action.payload
            }
        case 'UPDATE_CURRENT_TODO_DESCRIPTION':
            return {
                toDos: state.toDos,
                currentToDo: {
                    ...state.currentToDo,
                    "description": action.payload
                }
            }
        default:
            return state
    };
};

export const ToDoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toDosReducer, {
        toDos: null,
        currentToDo: null,
    });


    return (
        <ToDoContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ToDoContext.Provider>
    )
};