export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestions) => {

    const incorrectAnswers = backendQuestions.incorrect_answers.map(incorrectAnswers => decodeURIComponent(incorrectAnswers));

    return {
      correctAnswer : decodeURIComponent(backendQuestions.correct_answer),
      question : decodeURIComponent(backendQuestions.question),
      incorrectAnswers,
    };
  });
};