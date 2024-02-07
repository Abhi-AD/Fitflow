import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, Image } from 'react-native'; // Import Image from react-native
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera'; // Importing RNCamera from react-native-camera

const JoinWithCode = ({ route }) => { // Access route.params directly
     const navigation = useNavigation();

     const [organizationCode, setOrganizationCode] = useState('');
     const [isFocused, setIsFocused] = useState(false); // State to manage focus

     useEffect(() => {
          openScanner();
     }, []);

     const handleJoin = () => {
          if (organizationCode.trim() === '') {
               Alert.alert('Error', 'Please enter a valid organization code.');
               return;
          }
          console.log('Joining with organization code:', organizationCode);
          setOrganizationCode('');
     };

     const openScanner = () => {
          console.log('Opening scanner...');
     };

     return (
          <View style={styles.container}>
               {/* back */}
               <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                         navigation.navigate("HomePage"); // Go back when pressed
                    }}>
                    <Icon
                         name={Platform.OS === 'android' ? 'chevron-back' : 'chevron-back-outline'} // Icon name based on platform
                         size={44}
                         color="white"
                    />
               </TouchableOpacity>

               <Text style={styles.title}>Organization Code</Text>
               <TouchableOpacity style={styles.qrCodeContainer} onPress={openScanner}>
                    <View style={styles.qrCodeIconWrapper}>
                         <Icon name="qr-code-outline" size={150} color="#DDF44C" />
                    </View>
                    <Text style={styles.camera}>Tap on the OR to open the scanner.</Text>
               </TouchableOpacity>
               <Text style={styles.body}>Or,{'\n'}Join by scanning QR code.</Text>
               <Text style={styles.body_content}>Enter the 8 digit organization code tp directly become the member of your fitness club.</Text>

               <TextInput
                    style={[styles.input, { borderColor: isFocused ? '#1874FA' : '#fff' }]}
                    placeholder="FIFL999"
                    placeholderTextColor="gray"
                    onChangeText={text => setOrganizationCode(text)}
                    value={organizationCode}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
               />
               <TouchableOpacity style={styles.button} onPress={handleJoin}>
                    <Text style={styles.buttonText}>Continue with Code</Text>
               </TouchableOpacity >
          </View >
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
     },
     title: {
          marginTop: "30%",
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
     },
     camera: {
          color: '#DDF44C',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
     },
     backButton: {
          position: 'absolute',
          top: 20,
          left: 20,
     },
     input: {
          backgroundColor: "#3B3D3B",
          width: '40%',
          height: 40,
          marginTop: 20,
          paddingHorizontal: 10,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#fff',
          textAlign: 'center',
     },
     buttonText: {
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
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
     cardImage: {
          width: 200,
          height: 200,
          resizeMode: 'contain',
     },
     qrCodeContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3%',
     },
     qrCodeIconWrapper: {
          alignItems: 'center',
          justifyContent: 'center',
     },
     body: {
          marginTop: "5%",
          color: '#818283',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: "center",
     },
     body_content: {
          marginTop: "3%", // Change this to "50%" to push down by 50%
          color: '#818283',
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: "center",
     },

});

export default JoinWithCode;
