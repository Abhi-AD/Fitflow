import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo

const ResendOTPButton = ({ onPress }) => (
     <TouchableOpacity style={styles.resendButton} onPress={onPress}>
          <Feather name="rotate-cw" size={24} color="#DDF44C" />
     </TouchableOpacity>
);

const OTPPage = () => {
     const navigation = useNavigation();

     const [otp, setOTP] = useState('');
     const [timer, setTimer] = useState(10); // Initial countdown time

     useEffect(() => {
          const interval = setInterval(() => {
               if (timer > 0) {
                    setTimer(timer - 1);
               } else {
                    clearInterval(interval);
                    // Handle timeout logic here, such as disabling resend button or other actions
               }
          }, 1000);

          return () => clearInterval(interval);
     }, [timer]);

     const handleVerifyOTP = () => {
          // Here you can verify the OTP entered by the user
          console.log('Verifying OTP:', otp);
          navigation.navigate('RegisterScreen');
          // Perform your verification logic here
     };

     const handleResendOTP = () => {
          // Handle resend OTP action here
          setTimer(10); // Reset timer
     };
     const [phoneNumber, setPhoneNumber] = useState('');


     return (
          <View style={styles.container}>
               <Text style={styles.title}>Verify OTP</Text>
               <Text style={styles.subtitle}>Enter the code we've just sent your mobile number</Text>
               <Text style={styles.value}>"9822946156"</Text>
               <TextInput
                    style={[styles.otp, styles.otpWithBorder]}
                    keyboardType="numeric"
                    placeholder="000000"
                    placeholderTextColor="#ffff"
                    onChangeText={setOTP}
                    value={otp}
                    maxLength={6}
               />
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
     }
     ,
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
     value: {
          fontSize: 20,
          color: '#DDF44C',
          fontWeight: 'bold',
          marginBottom: 20,
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






     input: {
          height: 50,
          color: '#fff',
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 10,
          marginBottom: 20,
          fontSize: 18,
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
