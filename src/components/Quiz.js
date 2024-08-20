import { useReducer, useState } from "react";
import Question from "./Question";

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

const Quiz = () => {

    //declare reducer function
    const[state, dispatch] = useReducer(reducer, initialState);

    console.log("render", state);

    const btnClick = () => {
        console.log("next button have been clicked");
        //call reducer function
        dispatch({type: "NEXT_QUESTION"});
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    Question 1/8
                </div>
                <Question questions={state.questions} />
                <div className="next-button" onClick={btnClick}>Next {state.currentQuestionIndex}</div>
            </div>
        </div>
      );
};

export default Quiz;