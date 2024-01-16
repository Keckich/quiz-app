import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import ProgressBar from "./ProgressBar";

const TIMEOUT = 15000;

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const activeQuestionIndex = selectedAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const selectAnswer = (answer) => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} />
        <h2>Quiz completed!</h2>
      </div>
    );
  }
  
  const question = QUESTIONS[activeQuestionIndex];
  const shuffledAnswers = [...question.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <section id="question">
      <ProgressBar timeout={TIMEOUT} onTimeOut={() => selectAnswer(null)} />
      <h2>{question.text}</h2>
      <ul id="answers" key={question.id}>
        {shuffledAnswers.map((answer, index) => {
          return (
            <li className="answer" key={`answer-${index}`}>
              <button onClick={selectAnswer}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
