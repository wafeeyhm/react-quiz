import { createContext, useReducer } from "react";
import questions from '../data';
import { shuffleAnswers } from "../helper";

const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults : false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: "",
    correctAnswerCount: 0,
};

//reducer will contain alot of business logic.
const reducer =  (state, action) => {
    
    console.log('reducer', state, action);

    switch(action.type){

        case "SELECT_ANSWER" : {
            const correctAnswerCount = action.paylout === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswerCount,
            };
        }
        
        case "NEXT_QUESTION" : {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
        
            const currentQuestionIndex = showResults 
            ? state.currentQuestionIndex 
            : state.currentQuestionIndex + 1;

            const answers = showResults 
            ? [] 
            : shuffleAnswers(state.questions[currentQuestionIndex]);

            return {
                ...state, 
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: "",
            };
        }

        case "RESTART" : {
            return initialState;
        }

        default : {
            return state;
        }
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    //declare reducer function
    const value = useReducer(reducer, initialState);

    console.log("render", value);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}