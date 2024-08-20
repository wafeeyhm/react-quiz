import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {

    //accessing the global property which are defined in the quiz context
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);

    const btnClick = () => {
        console.log("next button have been clicked");
        //call reducer function
        dispatch({type: "NEXT_QUESTION"});
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </div>
                <Question />
                <div className="next-button" onClick={btnClick}>Next</div>
            </div>
        </div>
      );
};

export default Quiz;