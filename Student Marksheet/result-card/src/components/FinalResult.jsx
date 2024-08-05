import React from 'react';

function FinalResult({ totalMarks, percentage, division }) {
  return (
    <div className="final-result">
      <h2>Final Result</h2>
      <p>Total Marks: {totalMarks}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <p>Division: {division}</p>
    </div>
  );
}

export default FinalResult;
