import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
