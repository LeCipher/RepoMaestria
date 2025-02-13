import React, { useState, useEffect } from "react";
import "../css/quiz.css";
import { FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";

const InteractiveQuiz = ({
  question,
  options,
  correctAnswer,
  correctExplanation,
  incorrectExplanation,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState({ total: 0, correct: 0 });

  // Este useEffect se ejecuta una sola vez cuando se monta el componente.
  // Aquí reiniciamos el contador en localStorage.
  useEffect(() => {
    const initialProgress = { total: 0, correct: 0 };
    localStorage.setItem("quizProgress", JSON.stringify(initialProgress));
    setProgress(initialProgress);
  }, []);

  // Función para actualizar el progreso y guardarlo en localStorage
  const updateProgress = (isCorrect) => {
    const stored = localStorage.getItem("quizProgress");
    let currentProgress = stored
      ? JSON.parse(stored)
      : { total: 0, correct: 0 };
    currentProgress.total += 1;
    if (isCorrect) {
      currentProgress.correct += 1;
    }
    localStorage.setItem("quizProgress", JSON.stringify(currentProgress));
    setProgress(currentProgress);
  };

  const handleSelect = (option) => {
    if (!showFeedback) {
      setSelectedOption(option);
      setShowFeedback(true);
      updateProgress(option === correctAnswer);
    }
  };

  const getOptionState = (optionKey) => {
    if (!showFeedback) return "";
    if (optionKey === correctAnswer) return "correct";
    if (optionKey === selectedOption) return "incorrect";
    return "disabled";
  };

  // Calcular porcentajes
  const percentCorrect =
    progress.total > 0
      ? ((progress.correct / progress.total) * 100).toFixed(0)
      : 0;
  const percentIncorrect =
    progress.total > 0
      ? (((progress.total - progress.correct) / progress.total) * 100).toFixed(
          0
        )
      : 0;

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <h3 className="quiz-question">{question}</h3>
      </div>

      <div className="options-list">
        {Object.entries(options).map(([key, value]) => (
          <div
            key={key}
            className={`option-item ${getOptionState(key)}`}
            onClick={() => handleSelect(key)}
          >
            <div className="option-content">
              <span className="option-letter">{key}</span>
              <div className="option-text">{value}</div>
              {showFeedback && (
                <div className="status-icon">
                  {key === correctAnswer ? (
                    <FiCheckCircle className="correct-icon" />
                  ) : key === selectedOption ? (
                    <FiXCircle className="incorrect-icon" />
                  ) : (
                    <FiAlertCircle className="disabled-icon" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showFeedback && (
        <div
          className={`feedback-box ${
            selectedOption === correctAnswer ? "success" : "error"
          }`}
        >
          <div className="feedback-header">
            {selectedOption === correctAnswer ? (
              <>
                <FiCheckCircle className="feedback-icon success" />
                <h4>¡Respuesta Correcta!</h4>
              </>
            ) : (
              <>
                <FiXCircle className="feedback-icon error" />
                <h4>Respuesta Incorrecta</h4>
              </>
            )}
          </div>
          <div className="feedback-content">
            <p>
              <strong>Tu selección:</strong> {options[selectedOption]}
            </p>
            <p>
              <strong>Explicación:</strong>{" "}
              <span>
                {selectedOption === correctAnswer
                  ? correctExplanation
                  : incorrectExplanation}
              </span>
            </p>
            <div className="correct-answer">
              <FiCheckCircle />
              <span>
                Respuesta correcta:{" "}
                <strong>
                  {correctAnswer}) {options[correctAnswer]}
                </strong>
              </span>
            </div>
          </div>
          {/* Sección de seguimiento de progreso */}
          <div className="progress-tracker">
            <p>
              <strong>Progreso:</strong> {progress.total} pregunta
              {progress.total !== 1 && "s"} respondida
              {progress.total !== 1 && "s"}
            </p>
            <p>
              <strong>Correctas:</strong> {percentCorrect}% -{" "}
              <strong>Incorrectas:</strong> {percentIncorrect}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;
