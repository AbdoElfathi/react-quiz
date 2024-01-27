function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcom to the React Quiz</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
