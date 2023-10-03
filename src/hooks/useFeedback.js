import { useState } from "react";

const useFeedback = (
  initialFeedback,
  successConfiguration,
  failureConfiguration
) => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const showResult = (error) => {
    setFeedback({
      isShowing: true,
      resultConfiguration: error
        ? {
            ...failureConfiguration,
            message: error,
          }
        : successConfiguration,
    });
  };
  const resetResult = () => {
    setFeedback(initialFeedback);
  };

  return [feedback, showResult, resetResult];
};

export default useFeedback;
