// src/App.js
// src/App.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import StudentRegistrationForm from './components/StudentRegistrationForm';

function App() {
  return (
    <Box bg="gray.100" minH="100vh" p={5} display="flex" justifyContent="center" alignItems="center">
      <StudentRegistrationForm />
    </Box>
  );
}

export default App;
