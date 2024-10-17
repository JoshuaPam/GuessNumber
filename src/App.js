import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the guess, feedback, and random number
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [randomNumber] = useState(generateRandomNumber()); // Removed setRandomNumber
  const [attempts, setAttempts] = useState(0);

  // Function to generate a random number between 1 and 10
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // Handle the guess input
  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  // Check the guess when user submits
  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedGuess = parseInt(guess, 10);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 10) {
      setFeedback('Please enter a number between 1 and 10.');
      return;
    }

    setAttempts(attempts + 1);

    if (parsedGuess === randomNumber) {
      setFeedback(`Correct! You guessed the number in ${attempts + 1} attempts.`);
    } else if (parsedGuess < randomNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Too high! Try again.');
    }
  };

  return (
    <div className="App">
      <h1>Guess the Number (1-10)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          value={guess}
          onChange={handleChange}
        />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default App;
