import React from 'react';

function PersonalDetails({ details }) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <p>Roll No: {details.rollNo}</p>
      <p>School Roll: {details.schoolCode}</p>
      <p>Name: {details.name}</p>
      <p>Exam Category: {details.examCategory}</p>
    </div>
  );
}

export default PersonalDetails;

