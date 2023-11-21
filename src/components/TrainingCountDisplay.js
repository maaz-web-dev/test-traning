import React from 'react';

function TrainingCountDisplay({ trainingData }) {
  function countTrainings(data) {
    const trainingCounts = {};
    data.forEach(person => {
      person.completions.forEach(training => {
        trainingCounts[training.name] = (trainingCounts[training.name] || 0) + 1;
      });
    });
    return trainingCounts;
  }

  const trainingCounts = countTrainings(trainingData);

  return (
    <div>
      <h1>Training Counts</h1>
      <table>
        <thead>
          <tr>
            <th>Training</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(trainingCounts).map(([training, count]) => (
            <tr key={training}>
              <td>{training}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainingCountDisplay;
