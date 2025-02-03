import { useState } from "react";
import { useQuiz } from "@/hooks/trivia/useQuiz";
import {
	QuizHeader,
	QuizQuestion,
	QuizAnswer,
	QuizScore,
	QuizSettings,
} from "@/components/triviaQuiz";
import type { QuizSettingsType } from "@/types";
import "@/components/triviaQuiz/triviaQuiz.css";

const TriviaQuiz = () => {
	const [showSettings, setShowSettings] = useState(true);
	const {
		questions,
		loading,
		state,
		handleAnswerClick,
		handleNextQuestion,
		startTimer,
		restartQuiz,
		startQuizWithSettings,
	} = useQuiz();

	const handleStartQuiz = async (settings: QuizSettingsType) => {
		await startQuizWithSettings(settings);
		setShowSettings(false);
	};

	if (showSettings) {
		return <QuizSettings onStartQuiz={handleStartQuiz} />;
	}

	if (loading) return <div className="quiz-loading">Loading questions...</div>;

	if (state.showScore) {
		return (
			<QuizScore
				score={state.score}
				totalQuestions={questions.length}
				onRestart={restartQuiz}
			/>
		);
	}

	const currentQ = questions[state.currentQuestion];
	if (!questions.length || !currentQ) {
		return <div className="quiz-loading">Loading questions...</div>;
	}

	return (
		<div className="quiz-container">
			<QuizHeader
				currentQuestion={state.currentQuestion}
				totalQuestions={questions.length}
				timeLeft={state.timeLeft}
			/>

			<QuizQuestion
				question={currentQ.question}
				timerActive={state.timerActive}
				showFeedback={state.showFeedback}
				readyForNext={state.readyForNext}
				onStartTimer={startTimer}
				onNextQuestion={handleNextQuestion}
			/>

			<div className="quiz-answers">
				{currentQ.answers.map((answer, index) => (
					<QuizAnswer
						key={index}
						answer={answer}
						isCorrect={answer === currentQ.correct_answer}
						showFeedback={state.showFeedback}
						timerActive={state.timerActive}
						onAnswerClick={handleAnswerClick}
						correctAnswer={currentQ.correct_answer}
					/>
				))}
			</div>
		</div>
	);
};

export default TriviaQuiz;
