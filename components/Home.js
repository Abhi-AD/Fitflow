import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {


     return (
          <View style={styles.container}>
               <Text style={styles.title}>Hy</Text>
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

export default HomePage;
