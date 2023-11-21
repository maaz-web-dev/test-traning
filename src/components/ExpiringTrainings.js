import React from 'react';

function ExpiringTrainings({ trainingData, specifiedDate }) {
  const getExpiringTrainings = () => {
    const results = [];

    trainingData.forEach(person => {
      person.completions.forEach(training => {
        const completionDate = new Date(training.timestamp);
        const oneMonthFromSpecifiedDate = new Date(specifiedDate);
        oneMonthFromSpecifiedDate.setMonth(oneMonthFromSpecifiedDate.getMonth() + 1);

        if (completionDate <= specifiedDate) {
          // Training has expired
          results.push({
            personName: person.name,
            trainingName: training.name,
            expired: true,
          });
        } else if (completionDate <= oneMonthFromSpecifiedDate) {
          // Training will expire within one month
          results.push({
            personName: person.name,
            trainingName: training.name,
            expiresSoon: true,
          });
        }
      });
    });

    return results;
  };

  const expiringTrainings = getExpiringTrainings();

  return (
    <div>
      <h2>Expiring Trainings</h2>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Training Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expiringTrainings.map((result, index) => (
            <tr key={index}>
              <td>{result.personName}</td>
              <td>{result.trainingName}</td>
              <td>{result.expired ? 'Expired' : 'Expires Soon'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpiringTrainings;
