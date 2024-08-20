import { useState } from "react";
import Question from "./Question";

const Quiz = () => {

    const [state, setState] = useState({
        currentQuestionIndex: 0,
        questions: [],
    });

    const testClick = () => {
        console.log("next button have been clicked");
        //setCurrentQuestionIndex(currentQuestionIndex + 1);
        setState({
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
        });
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    Question 1/8
                </div>
                <Question></Question>
                <div className="next-button" onClick={testClick}>Next {state.currentQuestionIndex}</div>
            </div>
        </div>
      );
};

export default Quiz;