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
                {quizState.answers.map((answer, index) => (
                    <Answer answerText={answer} key={index} />
                ))}
            </div>
        </div>
      );
};

export default Question;