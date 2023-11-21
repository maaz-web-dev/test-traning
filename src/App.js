
import './App.css';
import UserTable from './components/UserTable';
import React, { useEffect, useState } from 'react';
import TrainingCountDisplay from './components/TrainingCountDisplay';

function App() {
  
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    fetch('/trainings.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setTrainingData(data))
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <TrainingCountDisplay trainingData={trainingData} />
    </div>
  );
}

export default App;
