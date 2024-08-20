import { createContext, useReducer } from "react";

const initialState = {
    currentQuestionIndex: 0,
    question: [],
};

//reducer will contain alot of business logic.
const reducer =  (state, action) => {
    
    if (action.type === "NEXT_QUESTION"){
        return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};
    }

    return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    //declare reducer function
    const value = useReducer(reducer, initialState);

    console.log("render", value);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}