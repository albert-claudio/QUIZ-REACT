import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz"; 

import Welcome from "./components/welcome";
import Questions from "./components/Question";
import GameOver from "./components/GameOver";

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //EMBARALHAR AS PERGUNTAS 
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [])

  return (
      <div className="App">
        <h1>Quiz App</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Questions/>}
        {quizState.gameStage === "End" && <GameOver/>}
      </div>
  );
}

export default App;
