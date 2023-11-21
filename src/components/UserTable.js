import React from 'react';
import { Table } from 'react-bootstrap';
import './table.css'

const MyTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago' },
  ];

  return (
    <Table striped bordered hover responsive="md" className="mt-4">
      <thead>
        <tr className="table-dark">
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
