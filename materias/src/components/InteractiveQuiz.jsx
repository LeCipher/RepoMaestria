import React, { useState } from 'react';
import '../css/quiz.css';
import { FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

const InteractiveQuiz = ({
  question,
  options,
  correctAnswer,
  correctExplanation,
  incorrectExplanation
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (option) => {
    if (!showFeedback) {
      setSelectedOption(option);
      setShowFeedback(true);
    }
  };

  const getOptionState = (optionKey) => {
    if (!showFeedback) return '';
    if (optionKey === correctAnswer) return 'correct';
    if (optionKey === selectedOption) return 'incorrect';
    return 'disabled';
  };

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <h3 className="quiz-question">{question}</h3>
        {/* <div className="progress-indicator">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`progress-dot ${i < 1 ? 'active' : ''}`} />
          ))}
        </div> */}
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
        <div className={`feedback-box ${selectedOption === correctAnswer ? 'success' : 'error'}`}>
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
            <p><strong>Tu selección:</strong> {options[selectedOption]}</p>
            <p><strong>Explicación:</strong> <div>{selectedOption === correctAnswer ? correctExplanation : incorrectExplanation}</div></p>
            <div className="correct-answer">
              <FiCheckCircle />
              <span>
                Respuesta correcta:
                <div><strong>{correctAnswer}) {options[correctAnswer]}</strong></div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;
