import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const HomePage = () => {

     const handlePhoneNumberChange = (formatted, extracted) => {
          setPhoneNumber(formatted);

          // Check if extracted is not undefined and not null before calling split
          if (extracted && extracted !== null) {
               // Extracting the country code assuming it's the first part of the formatted number
               const code = extracted.split(' ')[0];
               setCountryCode(code);
          }
     };

     const handleButtonPress = () => {
          // Validate that the entered phone number is a 10-digit number
          if (phoneNumber.replace(/\D/g, '').length === 10) {
               console.log('Phone Number:', phoneNumber);
               console.log('Country Code:', countryCode);
          } else {
               console.log('Invalid phone number. Please enter a 10-digit number.');
          }
     };

     return (
          <View style={styles.container}>
               <Text style={styles.title}>
                    <Text style={{ color: '#DDF44C' }}>fit</Text>
                    <Text style={{ color: '#ffff' }}>flow</Text>
               </Text>
               <Text style={styles.subtitle}>Enter your mobile number</Text>
               <TextInputMask
                    style={[styles.input, styles.inputWithBorder]}  // Combine the existing style with the new border style
                    placeholder="e.g: 9800011111"
                    placeholderTextColor="#999"
                    type={'cel-phone'}
                    options={{
                         maskType: 'BRL',
                         withDDD: true,
                         dddMask: '(999) ',
                    }}
                    onChangeText={handlePhoneNumberChange}
               />
               <TouchableOpacity
                    style={styles.button}
                    onPress={handleButtonPress}
               >
                    <Text style={styles.buttonText}>Continue</Text>
               </TouchableOpacity>
               <Text style={{fontSize:23, textAlign:"center"}}>
                    <Text style={{ color: '#ffff' }}>By tapping continue, you agree to the</Text>
                    <Text style={{ color: '#DDF44C' }}> Terms and Conditions</Text>
                    <Text style={{ color: '#ffff' }}> and</Text>
                    <Text style={{ color: '#DDF44C' }}> Privacy Policy</Text>
                    <Text style={{ color: '#ffff' }}>of Fit Flow.</Text>

               </Text>
          </View >
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
          width: '50%',
          borderColor: '#fff',
          borderWidth: 1,
          marginTop: 30,
          marginBottom: 20,
          paddingLeft: 10,
          color: '#fff',
          textAlign: 'center',
     },
     inputWithBorder: {
          borderWidth: 2,  // Customize the border width
          borderColor: '#B1B185',  // Customize the border color
          borderRadius: 8,  // Customize the border radius for rounded corners
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

export default HomePage;
