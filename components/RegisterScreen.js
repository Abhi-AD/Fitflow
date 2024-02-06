import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number');
      return;
    }
    if (!validateName(fullName)) {
      Alert.alert('Invalid Name', 'Please enter a valid name');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    if (!gender) {
      Alert.alert('Please select your gender');
      return;
    }
    console.log('Email:', email, 'Fullname:', fullName, 'PhoneNumber:', phoneNumber, 'Gender:', gender);
    navigation.navigate('HomePage');
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/u.test(phoneNumber);
  };

  const validateName = (name) => {
    return name.trim().length > 0; // Checks if the name is not empty after trimming whitespace
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Checks if the email matches basic email pattern
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Account</Text>

      <Text style={styles.input}>Mobile Number</Text>
      <TextInput
        style={[styles.forms, styles.formsWithBorder]}
        placeholder="Enter Your Phone number"
        placeholderTextColor="#c1c1c1"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Text style={styles.input}>Full Name</Text>
      <TextInput
        style={[styles.forms, styles.formsWithBorder]}
        placeholder="John Doe"
        placeholderTextColor="#c1c1c1"
        onChangeText={setFullName}
      />
      <Text style={styles.input}>Email Address (Optional)</Text>
      <TextInput
        style={[styles.forms, styles.formsWithBorder]}
        placeholder="xyz@example.com"
        placeholderTextColor="#c1c1c1"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.input}>Your Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'male' && styles.selectedRadioButton]}
          onPress={() => setGender('male')}>
          <Text style={styles.radioButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'female' && styles.selectedRadioButton]}
          onPress={() => setGender('female')}>
          <Text style={styles.radioButtonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'other' && styles.selectedRadioButton]}
          onPress={() => setGender('other')}>
          <Text style={styles.radioButtonText}>Other</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  header: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
    justifyContent: "space-evenly",
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 10,
  },
  input: {
    color: "#fff",
    fontSize: 15,
    textAlign: "left",
    fontWeight: 'bold',
    justifyContent: "space-evenly",
    marginTop: 10,
    marginLeft: 30,
  },
  forms: {
    height: 50,
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#fff',
    textAlign: 'left',
  },
  formsWithBorder: {
    borderWidth: 2,
    borderColor: '#A3A3A1',
    backgroundColor: "#575949",
    borderRadius: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#DDF44C',
    padding: 20,
    alignSelf: 'stretch',
    marginTop: 250,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  radioContainer: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  radioButton: {
    backgroundColor: '#575949',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedRadioButton: {
    backgroundColor: '#DDF44C',
  },
  radioButtonText: {
    color: 'white',
  },
});

export default RegisterScreen;
