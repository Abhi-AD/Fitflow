import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo

// Reusable component for the Resend OTP button
const ResendOTPButton = ({ onPress }) => (
     <TouchableOpacity style={styles.resendButton} onPress={onPress}>
          <Feather name="rotate-cw" size={24} color="#DDF44C" />
     </TouchableOpacity>
);

// OTPPage component
const OTPPage = (props) => {
     const navigation = useNavigation();

     // States for OTP input, timer, and generated OTP
     const [otp, setOTP] = useState('');
     const [timer, setTimer] = useState(10);
     const [generatedOTP, setGeneratedOTP] = useState('');

     // Countdown timer effect
     useEffect(() => {
          const interval = setInterval(() => {
               if (timer > 0) {
                    setTimer(timer - 1);
               } else {
                    clearInterval(interval);
               }
          }, 1000);

          return () => clearInterval(interval);
     }, [timer]);

     // Function to handle OTP verification
     const handleVerifyOTP = () => {
          if (otp.length === 6) {
               if (otp === generatedOTP) {
                    navigation.navigate('RegisterScreen');
               } else {
                    Alert.alert("Invalid OTP", "The entered OTP is incorrect.");
               }
          } else {
               Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
          }
     };

     // Function to generate a random OTP
     const generateOTP = () => {
          const length = 6;
          let otp = '';
          for (let i = 0; i < length; i++) {
               otp += Math.floor(Math.random() * 10);
          }
          return otp;
     };

     // Function to handle Resend OTP button click
     const handleResendOTP = () => {
          const newOTP = generateOTP();
          // console.log("New OTP:", newOTP); 
          setGeneratedOTP(newOTP);
          setOTP(newOTP);
          setTimer(10);
     };

     // Generate initial OTP when component mounts
     useEffect(() => {
          const initialOTP = generateOTP();
          setGeneratedOTP(initialOTP);
          setOTP(initialOTP);
     }, []);

     return (
          <View style={styles.container}>
               <Text style={styles.title}>Verify OTP</Text>
               <Text style={styles.subtitle}>Enter the code we've just sent your mobile number</Text>
               <TextInput
                    style={[styles.otp, styles.otpWithBorder]}
                    keyboardType="numeric"
                    placeholder="000000"
                    placeholderTextColor="#ffff"
                    onChangeText={setOTP}
                    value={otp}
                    maxLength={6}
               />
               <Text style={{ color: '#fff' }}>{(otp || '').length}/6</Text>

               <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                    <Text style={styles.buttonText}>Verify</Text>
               </TouchableOpacity>
               <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>
                         {timer > 0 ? `Resend Code in ${timer} seconds` : 'Resend Code'}
                    </Text>
                    {timer <= 0 && <ResendOTPButton onPress={handleResendOTP} />}
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     resendContainer: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          padding: 20,
     },
     title: {
          fontSize: 24,
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: 20,
     },
     subtitle: {
          fontSize: 18,
          color: '#fff',
          marginBottom: 30,
          textAlign: 'center',
     },
     otp: {
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
     otpWithBorder: {
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
     resendButton: {
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',
          marginBottom: 10,
     },
     resendText: {
          fontSize: 20,
          color: '#DDF44C',
     },
});

export default OTPPage;
