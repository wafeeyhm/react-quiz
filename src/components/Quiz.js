import Question from "./Question";

const Quiz = () => {

    const testClick = () => {
        console.log("next button have been clicked");
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    Question 1/8
                </div>
                <Question></Question>
                <div className="next-button" onClick={testClick}>Next</div>
            </div>
        </div>
      );
};

export default Quiz;