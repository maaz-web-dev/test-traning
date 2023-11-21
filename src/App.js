import './App.css';
import React, { useEffect, useState } from 'react';
import TrainingCountDisplay from './components/TrainingCountDisplay';
import FiscalYearTraining from './components/FiscalYearTraining';
import ExpiringTrainings from './components/ExpiringTrainings'; 

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
  
  // Define the specified date for expiring trainings
  const specifiedDate = new Date('2023-10-01');

  return (
    <div className="App">
      <TrainingCountDisplay trainingData={trainingData} />
      <FiscalYearTraining 
        trainingData={trainingData} 
        trainings={specifiedTrainings} 
        fiscalYearStart={fiscalYearStart} 
        fiscalYearEnd={fiscalYearEnd} 
      />
      
      {/* Include the ExpiringTrainings component */}
      <ExpiringTrainings 
        trainingData={trainingData} 
        specifiedDate={specifiedDate} 
      />
    </div>
  );
}

export default App;
