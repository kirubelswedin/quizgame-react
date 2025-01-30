import { useState, useEffect, useCallback, useRef } from "react";
import { fetchQuizQuestions, Difficulty, Question } from "@/api";
import "@/components/triviaQuiz.css";

const TOTAL_QUESTIONS = 10;

interface QuizQuestion extends Question {
	answers: string[];
}

const TriviaQuiz = () => {
	// Group related state
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// Game state
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(10);

	// UI state
	const [loading, setLoading] = useState(true);
	const [showScore, setShowScore] = useState(false);
	const [showFeedback, setShowFeedback] = useState(false);
	const [timerActive, setTimerActive] = useState(false);
	const [readyForNext, setReadyForNext] = useState(false);

	const initRef = useRef(false); // prevent double fetch
	const currentQ = questions[currentQuestion];

	const startQuiz = useCallback(async () => {
		if (initRef.current) return;
		initRef.current = true;

		try {
			setLoading(true);
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.MEDIUM
			);
			// console.log("Fetched questions:", newQuestions);
			setQuestions(newQuestions);
		} catch (error) {
			console.error("Failed to fetch questions:", error);
		} finally {
			setLoading(false);
		}
	}, []);

	// Initialize quiz
	useEffect(() => {
		let mounted = true;
		const initQuiz = async () => {
			if (mounted) await startQuiz();
		};
		initQuiz();
		return () => {
			mounted = false;
		};
	}, [startQuiz]);

	// Timer logic
	useEffect(() => {
		if (!timerActive || loading || showScore || showFeedback) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					setShowFeedback(true);
					setReadyForNext(true);
					setTimerActive(false);
					return 10;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [timerActive, loading, showScore, showFeedback]);

	// Event handlers
	const handleAnswerClick = (answer: string) => {
		setTimerActive(false);
		const isCorrect = answer === currentQ.correct_answer;
		if (isCorrect) setScore(score + 1);
		// console.log(`Answer selected: ${answer}, Correct: ${isCorrect}`);
		setShowFeedback(true);
		setReadyForNext(true);
	};

	const handleNextQuestion = () => {
		setShowFeedback(false);
		setReadyForNext(false);
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion((prev) => prev + 1);
			setTimeLeft(10);
			setTimerActive(true); // start timer on next question
		} else {
			setShowScore(true);
		}
	};

	const startTimer = () => setTimerActive(true);

	const restartQuiz = async () => {
		// console.log("Restarting quiz...");
		initRef.current = false;
		setLoading(true);

		try {
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.MEDIUM
			);
			setQuestions(newQuestions);
			setCurrentQuestion(0);
			setScore(0);
			setShowScore(false);
			setTimeLeft(10);
			setShowFeedback(false);
			setTimerActive(false);
			setReadyForNext(false);
		} catch (error) {
			console.error("Failed to restart quiz:", error);
		} finally {
			setLoading(false);
		}
	};

	// UI
	if (loading) return <div className="quiz-loading">Loading questions...</div>;

	if (showScore) {
		return (
			<div className="quiz-score-section">
				<h2>Game Over!</h2>
				<p>
					You scored {score} out of {questions.length}
				</p>
				<button className="quiz-restart-btn" onClick={restartQuiz}>
					Play Again
				</button>
			</div>
		);
	}

	if (!questions.length || !currentQ) {
		return <div className="quiz-loading">Loading questions...</div>;
	}

	return (
		<div className="quiz-container">
			<div className="quiz-header">
				<div className="quiz-progress">
					Question {currentQuestion + 1}/{questions.length}
				</div>
				<div className="quiz-timer">Time left: {timeLeft}s</div>
			</div>

			<div
				className={`quiz-question ${timerActive || showFeedback ? "active" : ""}`}
			>
				<h2 dangerouslySetInnerHTML={{ __html: currentQ.question }}></h2>
				{!timerActive && !showFeedback && (
					<button className="start-timer-btn" onClick={startTimer}>
						Play Now
					</button>
				)}
				{readyForNext && (
					<button className="next-question-btn" onClick={handleNextQuestion}>
						Next Question
					</button>
				)}
			</div>

			<div className="quiz-answers">
				{currentQ.answers.map((answer: string, index: number) => (
					<button
						key={index}
						onClick={() => handleAnswerClick(answer)}
						className={`quiz-answer-btn ${
							timerActive || showFeedback ? "active" : ""
						} 
            ${
													showFeedback &&
													(answer === currentQ.correct_answer ? "correct" : "incorrect")
												}`}
						disabled={!timerActive || showFeedback}
						dangerouslySetInnerHTML={{ __html: answer }}
					/>
				))}
			</div>
		</div>
	);
};

export default TriviaQuiz;
