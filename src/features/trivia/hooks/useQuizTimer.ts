import { QuizState, SetState } from "@/features/trivia/types";
import { useEffect } from "react";
import { TIMER_DURATION } from "@/features/trivia/constants";


export const useQuizTimer = (state: QuizState, loading: boolean, setState: SetState) => {
  useEffect(() => {
    if (!state.timerActive || loading || state.showScore || state.showFeedback) return;
    
    const timer = setInterval(() => {
      setState(prev => prev.timeLeft <= 1 
        ? { ...prev, showFeedback: true, readyForNext: true, timerActive: false, timeLeft: TIMER_DURATION }
        : { ...prev, timeLeft: prev.timeLeft - 1 }
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [state.timerActive, loading, state.showScore, state.showFeedback, setState]);
};

