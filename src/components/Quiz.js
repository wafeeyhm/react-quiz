import { useState } from "react";
import Question from "./Question";

const Quiz = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const testClick = () => {
        console.log("next button have been clicked");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    Question 1/8
                </div>
                <Question></Question>
                <div className="next-button" onClick={testClick}>Next {currentQuestionIndex}</div>
            </div>
        </div>
      );
};

export default Quiz;