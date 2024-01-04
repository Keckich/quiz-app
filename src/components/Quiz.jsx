import { useState } from "react";
import questions from "../questions.js";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const question = questions[selectedAnswers.length];

  const selectAnswer = (answer) => {
    setSelectedAnswers(prevAnswers => [...prevAnswers, answer]);
  }

  const shuffledAnswers = [...question.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <section id="question-overview">
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
