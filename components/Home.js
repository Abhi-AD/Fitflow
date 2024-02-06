import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from './Card';

const HomePage = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.header}>Organization</Text>
               <Card title="Title" content="This is the content of the card."
                    imageSource={require('../assets/img/boost up fitness.jpeg')}
               />
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
});

export default HomePage;
