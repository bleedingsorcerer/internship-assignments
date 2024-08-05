import React, { useState } from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import MarksDetails from './components/MarksDetails';
import FinalResult from './components/FinalResult';

function App() {
  const studentData = {
    rollNo: '11500321076',
    schoolCode: '33',
    name: 'Shreyasi Dutta',
    examCategory: 'Regular',
    marks: {
      Hindi: 95,
      English: 99,
      Mathematics: 94,
      Science: 95,
      SocialScience: 97,
    }
  };

  const [totalMarks, setTotalMarks] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [division, setDivision] = useState(null);

  const calculateResult = () => {
    const total = Object.values(studentData.marks).reduce((a, b) => a + b, 0);
    const percent = (total / 500) * 100;
    const div = percent >= 60 ? 'First Division' : 'Second Division';

    setTotalMarks(total);
    setPercentage(percent);
    setDivision(div);
  };

  return (
    <div className="App">
      <h1>Annual Secondary School Examination Result, 2020</h1>
      <PersonalDetails details={studentData} />
      <MarksDetails marks={studentData.marks} />
      <button onClick={calculateResult}>Calculate Result</button>
      {totalMarks !== null && (
        <FinalResult totalMarks={totalMarks} percentage={percentage} division={division} />
      )}
    </div>
  );
}

export default App;
