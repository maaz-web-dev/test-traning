import './App.css';
import React, { useEffect, useState } from 'react';
import TrainingCountDisplay from './components/TrainingCountDisplay';
import FiscalYearTraining from './components/FiscalYearTraining';

function App() {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/trainings.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTrainingData(data);
        console.log('Fetched training data:', data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  // Define specified trainings and fiscal year dates
  const specifiedTrainings = ["Electrical Safety for Labs", "X-Ray Safety", "Laboratory Safety Training"];
  const fiscalYearStart = new Date('2023-07-01');
  const fiscalYearEnd = new Date('2024-06-30');

  return (
    <div className="App">
      <TrainingCountDisplay trainingData={trainingData} />

      {/* Include the FiscalYearTraining component */}
      <FiscalYearTraining 
        trainingData={trainingData} 
        trainings={specifiedTrainings} 
        fiscalYearStart={fiscalYearStart} 
        fiscalYearEnd={fiscalYearEnd} 
      />
    </div>
  );
}

export default App;
