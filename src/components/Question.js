import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {

    //accessing the global property which are defined in the quiz context
    const [quizState] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    console.log("Question", quizState);

    return (
        <div>
            <div className="question">
                {currentQuestion.question}
            </div>
            <div className="answers">
                <Answer></Answer>
                <Answer></Answer>
                <Answer></Answer>
                <Answer></Answer>
            </div>
        </div>
      );
};

export default Question;