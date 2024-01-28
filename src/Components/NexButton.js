const NexButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        index < numQuestions - 1
          ? dispatch({ type: "nextQuestion" })
          : dispatch({ type: "finished" })
      }
    >
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
};

export default NexButton;
