// src/StudentRegistrationForm.js
// src/StudentRegistrationForm.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    image: '',
    aadhar: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/png') {
      setFormData({
        ...formData,
        image: file,
      });
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert('Please upload a .png file.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      image: '',
      aadhar: '',
    });
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  const formatAadharInput = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 12);
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 ');
    setFormData({
      ...formData,
      aadhar: formattedInput,
    });
  };

  return (
    <Box
      width="400px"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
            <Input
              id="mobile"
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="image">Image</FormLabel>
            <Input
              id="image"
              name="image"
              type="file"
              accept=".png"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <>
                <Text color="green.500" mt={1}>
                  Uploaded
                </Text>
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  boxSize="100px"
                  mt={2}
                />
              </>
            )}
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="aadhar">Aadhar</FormLabel>
            <Input
              id="aadhar"
              name="aadhar"
              type="text"
              value={formData.aadhar}
              onChange={formatAadharInput}
            />
          </FormControl>
          <HStack spacing={4}>
            <Button colorScheme="red" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
};

export default StudentRegistrationForm;
