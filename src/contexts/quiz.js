import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = () => {
    return <QuizContext.Provider value="fooo"></QuizContext.Provider>
}