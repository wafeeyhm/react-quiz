import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {

    //accessing the global property which are defined in the quiz context
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);

    const nextBtn = () => {
        console.log("next button have been clicked");
        //call reducer function
        dispatch({type: "NEXT_QUESTION"});
    };

    const restartBtn = () => {
        console.log("restart button have been clicked");
        //call reducer function
        dispatch({type: "RESTART"});
    };

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    <div className="next-button" onClick={restartBtn}>Restart</div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                    </div>
                    <Question />
                    <div className="next-button" onClick={nextBtn}>Next</div>
                </div>
            )}
        </div>
      );
};

export default Quiz;