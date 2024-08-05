import React from 'react';

function MarksDetails({ marks }) {
  return (
    <div className="marks-details">
      <h2>Marks Details</h2>
      {Object.entries(marks).map(([subject, mark]) => (
        <p key={subject}>{subject}: {mark}</p>
      ))}
    </div>
  );
}

export default MarksDetails;

