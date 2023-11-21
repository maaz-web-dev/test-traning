import React from 'react';

function FiscalYearTraining({ trainingData, trainings, fiscalYearStart, fiscalYearEnd }) {
  const getFiscalYearTrainings = () => {
    let results = {};
    trainings.forEach(trainingName => {
      results[trainingName] = [];
    });

    trainingData.forEach(person => {
      person.completions.forEach(training => {
        if (trainings.includes(training.name) && 
            new Date(training.timestamp) >= fiscalYearStart && 
            new Date(training.timestamp) <= fiscalYearEnd) {
          results[training.name].push(person.name);
        }
      });
    });

    return results;
  };

  const fiscalYearTrainingResults = getFiscalYearTrainings();

  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Training</th>
            <th>Completed By</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fiscalYearTrainingResults).map(([training, completedBy]) => (
            <tr key={training}>
              <td>{training}</td>
              <td>{completedBy.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FiscalYearTraining;
