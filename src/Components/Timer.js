import { useEffect } from "react";

const Timer = ({ secondsRemianing, dispatch }) => {
  const mins = Math.floor(secondsRemianing / 60);
  const seconds = secondsRemianing % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
};

export default Timer;
