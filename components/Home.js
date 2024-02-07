import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Card from './Card';
import CardDetails from './CardDetails'; // Import CardDetails

const Stack = createStackNavigator();

const cards = [
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',
     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',
     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',
     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Epic Fitness",
          content: "Dallu Awas Marg, Dallu, Chhauni",
          imageSource: require('../assets/img/epic fitness.jpeg'), // Corrected image source
          email: "epic.fitness02@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
     {
          title: "Healthy Heart Fitness",
          content: "The Transport Management Office, Thulo",
          imageSource: require('../assets/img/Healthy Heart Fitness.jpg'), // Corrected image source
          email: "healthyheartfitness@gmail.com",
          phonenumber: '9808231722',
          owner: 'Rijan Maharjan',

     },
];

const HomePage = ({ navigation }) => {
     const handleCardPress = (title, content, imageSource, email, owner, phonenumber) => {
          navigation.navigate('CardDetails', { title, content, imageSource, email, owner, phonenumber });
     };

     return (
          <View style={styles.container}>
               <Text style={styles.header}>Organization</Text>
               <ScrollView>
                    {cards.map((card, index) => (
                         <TouchableOpacity key={index} onPress={() => handleCardPress(card.title, card.content, card.imageSource, card.email, card.owner, card.phonenumber)}>
                              <Card title={card.title} content={card.content} imageSource={card.imageSource} />
                         </TouchableOpacity>
                    ))}
               </ScrollView>
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
