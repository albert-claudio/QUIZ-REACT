import { useContext } from "react";
import { QuizContext } from "../context/quiz"; 

import Quiz from "../img/quiz.svg";

import "./welcome.css";

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio de Quiz" />
    </div>
  )
}

export default welcome