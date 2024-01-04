import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <Header />
      <main id="quiz">
        <Quiz />
      </main>
    </>
  );
}

export default App;
