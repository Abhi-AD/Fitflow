import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
     const navigation = useNavigation();
     const [phoneNumber, setPhoneNumber] = useState('');

     // Function to handle continue button press
     const handleContinuePress = () => {
          // Validate the phone number
          const extractedPhoneNumber = (phoneNumber || '').replace(/[^0-9]/g, '');

          // Check if the phone number has a total length of 10 characters
          if (extractedPhoneNumber.length === 10 && /^\d+$/.test(extractedPhoneNumber)) {
               navigation.navigate('OTPScreen');
          } else {
               navigation.navigate('OTPScreen');
               // Alert.alert("Invalid Phone Number", "Please enter a valid 10 digit phone number.", [{ text: "Okay" }]);
          }
     };

     return (
          <View style={styles.container}>
               <Text style={styles.title}>
                    <Text style={{ color: '#DDF44C' }}>fit</Text>
                    <Text style={{ color: '#ffff' }}>flow</Text>
               </Text>
               <Text style={styles.subtitle}>Enter your mobile number</Text>
               <View style={styles.inputContainer}>
                    <TextInputMask
                         style={[styles.input, styles.inputWithBorder]}
                         type={'cel-phone'}
                         options={{
                              maskType: 'custom',
                              withDDD: true,
                              dddMask: '999' // Customize the DDD mask if needed
                         }}
                         placeholder="e.g: 9800011111"
                         placeholderTextColor="#ffff"
                         value={phoneNumber}
                         onChangeText={(formatted, extracted) => {
                              setPhoneNumber(extracted);
                         }}
                    />
                    <Text style={{ color: '#fff' }}>{(phoneNumber || '').length}/10</Text>
               </View>
               <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
                    <Text style={styles.buttonText}>Continue</Text>
               </TouchableOpacity >

               <Text style={{ fontSize: 23, textAlign: "center", color: '#fff' }}>
                    By tapping continue, you agree to the
                    <Text style={{ color: '#DDF44C' }}> Terms and Conditions</Text>
                    and
                    <Text style={{ color: '#DDF44C' }}> Privacy Policy</Text>
                    of Fit Flow.
               </Text>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
     },
     title: {
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#fff',
     },
     subtitle: {
          fontSize: 18,
          color: '#fff',
     },
     input: {
          height: 50,
          width: '80%', // Adjust this value to make it wider
          borderColor: '#fff',
          borderWidth: 1,
          marginTop: 30,
          marginBottom: 20,
          paddingLeft: 10,
          color: '#fff',
          textAlign: 'center',
     },

     inputWithBorder: {
          borderWidth: 2,
          borderColor: '#B1B185',
          borderRadius: 8,
     },
     button: {
          backgroundColor: '#DDF44C',
          padding: 20,
          alignSelf: 'stretch',
          marginTop: 10,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          margin: 40,
     },
     buttonText: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
     },
});

export default LoginPage;
