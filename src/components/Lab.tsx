import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { questions } from '../data/questions';

type Difficulty = keyof typeof questions;

const Lab = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { addPoints } = useContext(AuthContext);

  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [score, setScore] = useState(0);

  const loadQuestion = () => {
    const newQuestionIndex = Math.floor(Math.random() * questions[difficulty].length);
    setCurrentQuestionIndex(newQuestionIndex);
    setOutput([`Question: ${questions[difficulty][newQuestionIndex].question}`]);
  };

  useEffect(() => {
    loadQuestion();
  }, [difficulty]);     

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `> ${input}`];
      const answer = questions[difficulty][currentQuestionIndex].answer;

      if (input.toLowerCase() === answer.toLowerCase()) {
        newOutput.push('Correct! +100 points');
        addPoints(100);
        setScore(score + 100);
        loadQuestion();
      } else if (input.toLowerCase() === 'skip') {
        newOutput.push('Skipped question.');
        loadQuestion();
      } else if (input.toLowerCase() === 'hint') {
        newOutput.push(`Hint: ${questions[difficulty][currentQuestionIndex].hint}`);
      } else if (input.toLowerCase() === 'help') {
        newOutput.push('Available commands: skip, hint, help');
      } else {
        newOutput.push('Incorrect. Try again.');
      }

      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <div className="bg-primary text-black p-6 rounded-lg h-full overflow-y-auto font-mono shadow-2xl border border-accent/20 shadow-accent/10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-accent">Score: {score}</span>
        </div>
        <div>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="bg-secondary text-black p-2 rounded border border-accent/20"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>
      {output.map((line, index) => (
        <div key={index} className="py-1 leading-relaxed">
          {line.startsWith('Question:') ? (
            <div className="text-accent font-bold mb-4">{line}</div>
          ) : line.startsWith('Correct!') ? (
            <div className="text-green-500">{line}</div>
          ) : line.startsWith('Incorrect') ? (
            <div className="text-red-500">{line}</div>
          ) : (
            <div className="opacity-90 text-black">{line}</div>
          )}
        </div>
      ))}
      <div className="flex mt-4 bg-secondary rounded p-2 border border-accent/20">
        <span className="mr-2 text-accent">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none focus:outline-none w-full text-black placeholder-gray-500"
          placeholder="Type your command..."
        />
      </div>
    </div>
  );
};

export default Lab;
