import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = (props) => {
  const navigation = useNavigation(); // Initialize navigation
  const { phoneNumber, setPhoneNumber } = props.route.params;
  const [gender, setGender] = useState('male');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    const lowercaseEmail = email.toLowerCase(); // Convert email to lowercase
    setEmail(lowercaseEmail); // Update email state with lowercase value

    if (!validateName(fullName)) {
      Alert.alert('Invalid Name', 'Please enter a valid name');
      return;
    }
    if (!validateEmail(lowercaseEmail)) { // Validate lowercase email
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    if (!gender) {
      Alert.alert('Please select your gender');
      return;
    }
    if (lowercaseEmail.length < 5) {
      Alert.alert('Invalid Email', 'Email must be at least 5 characters long');
      return;
    }
    console.log('Email:', lowercaseEmail, 'Fullname:', fullName, 'PhoneNumber:', phoneNumber, 'Gender:', gender);
    navigation.navigate('TabNavigator', {
      screen: 'Profile',
      params: {
        phoneNumber: phoneNumber,
        gender: gender,
        fullName: fullName,
        email: lowercaseEmail
      }
    });
    

  };

  const validateName = (name) => {
    return name.trim().length > 0; // Checks if the name is not empty after trimming whitespace
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('.com'); // Ensure email contains '@' and ends with '.com'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Account</Text>
      <Text style={styles.input}>Mobile Number</Text>
      <TextInput
        style={[styles.forms, styles.formsWithBorder]}
        placeholder="Enter Your Phone number"
        placeholderTextColor="#c1c1c1"
        value={phoneNumber}
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
        onChangeText={setEmail} // Update email state without converting to lowercase here
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
    marginTop: 180,
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
