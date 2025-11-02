import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { questions } from '../data/questions';

const Lab = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { addPoints } = useContext(AuthContext);

  const loadQuestion = () => {
    const newQuestionIndex = Math.floor(Math.random() * questions.beginner.length);
    setCurrentQuestionIndex(newQuestionIndex);
    setOutput([`Question: ${questions.beginner[newQuestionIndex].question}`]);
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `> ${input}`];
      const answer = questions.beginner[currentQuestionIndex].answer;

      if (input.toLowerCase() === answer.toLowerCase()) {
        newOutput.push('Correct! +100 points');
        addPoints(100);
        loadQuestion();
      } else {
        newOutput.push('Incorrect. Try again.');
      }

      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg h-96 overflow-y-auto font-mono shadow-2xl border border-gray-700">
      {output.map((line, index) => (
        <div key={index} className="py-1 leading-relaxed">
          {line.startsWith('Question:') ? (
            <div className="text-green-400 font-bold mb-4">{line}</div>
          ) : line.startsWith('Correct!') ? (
            <div className="text-green-500">{line}</div>
          ) : line.startsWith('Incorrect') ? (
            <div className="text-red-500">{line}</div>
          ) : (
            <div className="opacity-90">{line}</div>
          )}
        </div>
      ))}
      <div className="flex mt-4 bg-gray-900 rounded p-2">
        <span className="mr-2 text-green-400">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none focus:outline-none w-full text-white placeholder-gray-500"
          placeholder="Type your command..."
        />
      </div>
    </div>
  );
};

export default Lab;
