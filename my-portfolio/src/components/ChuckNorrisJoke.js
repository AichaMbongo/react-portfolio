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
    <div>
      <h2>Chuck Norris Joke:</h2>
      <p>{joke}</p>
    </div>
  );
};

export default ChuckNorrisJoke;
