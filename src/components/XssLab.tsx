import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  vulnerableCode: string;
  correctAnswer: string; // Expected payload or a pattern to match
  hint: string;
  explanation: string;
}

const xssQuestions: Question[] = [
  {
    id: 1,
    question: "This input field is vulnerable to basic reflected XSS. Can you make an alert box pop up?",
    vulnerableCode: `<div>Hello, <!-- USER_INPUT --></div>`,
    correctAnswer: "<script>alert('XSS')</script>",
    hint: "Think about injecting a script tag.",
    explanation: "Reflected XSS occurs when user input is immediately returned by a web application in an unsafe way. Injecting `<script>alert('XSS')</script>` causes the browser to execute the script."
  },
  {
    id: 2,
    question: "The application is trying to sanitize input, but it's flawed. Bypass the filter to trigger an alert.",
    vulnerableCode: `<img src="<!-- USER_INPUT -->" />`,
    correctAnswer: `" onerror="alert('XSS')`,
    hint: "What if the image fails to load?",
    explanation: "This is an example of XSS via an HTML attribute. By closing the `src` attribute with \"`\" and adding an `onerror` event handler, the script will execute if the image fails to load."
  },
  {
    id: 3,
    question: "This application allows SVG uploads, but doesn't properly sanitize them. Can you trigger an alert?",
    vulnerableCode: `<svg><!-- USER_INPUT --></svg>`,
    correctAnswer: `<script>alert('XSS')</script>`,
    hint: "SVG can contain script tags.",
    explanation: "SVG files can embed JavaScript. If not properly sanitized, uploading an SVG with an embedded script can lead to XSS."
  }
];

const XssLab: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = xssQuestions[currentQuestionIndex];

  const handleSubmit = () => {
    // Basic, *unsafe* simulation for demonstration.
    // In a real lab, this would involve a sandboxed environment or more robust parsing.
    if (userInput.includes(currentQuestion.correctAnswer)) {
      setFeedback('Correct! You found the XSS vulnerability.');
    } else {
      setFeedback('Incorrect. Keep trying!');
    }
    setShowExplanation(false);
    setShowHint(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < xssQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserInput('');
      setFeedback('');
      setShowExplanation(false);
      setShowHint(false);
    } else {
      setFeedback('Congratulations! You completed all XSS challenges.');
    }
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 text-primary dark:text-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">XSS Lab</h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Question {currentQuestion.id}</h3>
          <p className="mb-6">{currentQuestion.question}</p>

          <div className="mb-6">
            <p className="font-medium mb-2">Vulnerable Code Snippet:</p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm">
              <code>{currentQuestion.vulnerableCode.replace('<!-- USER_INPUT -->', userInput)}</code>
            </pre>
          </div>

          <div className="mb-6">
            <label htmlFor="xss-input" className="block text-lg font-medium mb-2">Your XSS Payload:</label>
            <input
              type="text"
              id="xss-input"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-primary dark:text-light-gray focus:outline-none focus:ring-2 focus:ring-accent"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your XSS payload here..."
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
            >
              Submit Payload
            </button>
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 bg-primary dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
              disabled={currentQuestionIndex === xssQuestions.length - 1 && feedback.includes('Completed')}
            >
              {currentQuestionIndex < xssQuestions.length - 1 ? 'Next Question' : 'Finish Lab'}
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </button>
          </div>

          {feedback && (
            <div className={`p-4 rounded-md mt-4 ${feedback.includes('Correct') ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}>
              <p className="font-semibold">{feedback}</p>
            </div>
          )}

          {showHint && (
            <div className="p-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 rounded-md mt-4">
              <p className="font-semibold">Hint:</p>
              <p>{currentQuestion.hint}</p>
            </div>
          )}

          {showExplanation && (
            <div className="p-4 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-md mt-4">
              <p className="font-semibold">Explanation:</p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default XssLab;
