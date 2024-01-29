// ChuckNorrisJoke.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Fetch Chuck Norris joke from the API
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => setJoke(response.data.value))
      .catch(error => console.error('Error fetching Chuck Norris joke:', error));
  }, []);

  return (
    <div className="container mt-4 bg-dark rounded">
      <div className="card bg-dark text-white">
        <div className="card-body ">
          <h2 className="card-title text-center">Chuck Norris Joke</h2>
          <p className="card-text text-center">{joke}</p>
        </div>
      </div>
    </div>
  );
};

export default ChuckNorrisJoke;
