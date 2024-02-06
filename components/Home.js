import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Card from './Card';

const HomePage = () => {
     return (

          <View style={styles.container}>
               <Text style={styles.header}>Organization</Text>
               <ScrollView>
                    <Card title="Epic Fitness" content="Dallu Awas Marg, Dallu, Chhauni"
                         imageSource={require('../assets/img/epic fitness.jpeg')}
                    />
                    <Card title="Healthy Heart Fitness" content="The Transaport Management Office, Thulo"
                         imageSource={require('../assets/img/Healthy Heart Fitness.jpg')}
                    />
                    <Card title="Power Planet Fitness" content="Dhalko-17, Khusibun"
                         imageSource={require('../assets/img/power planet fitness pvt.jpeg')}
                    />
                    <Card title="Muscle World" content="Khusibu Sadak, Nayabazar"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Gurkhali Fitness & Gym" content="Dharmapath, New Road, Kathmandu"
                         imageSource={require('../assets/img/gurkhali fitness and gym.png')}
                    />
                    <Card title="Waterfront Fitness Studio" content="Nirmal Lama Marg, Mhephi, Beside Amrit"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Fit Flow Station" content="F22, Chobhar, Kritpur-06"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Strong & Lean by Rosetta" content="Sesame World School, Nursey Galli"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Boost Uo Fitness" content="Swoyambhu Bhuikhal 15 ktm, Kathmandu"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="The Pump" content="The pump, Damkal-Chakrapath Marg,"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Fit-X" content="Nagarjun-01, Nagarjun Municipality"
                         imageSource={require('../assets/img/boost up fitness.jpeg')}
                    />
                    <Card title="Invictus Fitness" content="F86, Kot Devi, Jadibuti"
                         imageSource={require('../assets/img/invictus fitness logo.jpeg')}
                    />
                    <Card title="The Vigor Fitness" content="This is the content of the card."
                         imageSource={require('../assets/img/the vigor fitness.jpg')}
                    />
                    <Card title="Power Gym & Fitness" content="Tikhidol, Nakhudol, Lalitpur-14"
                         imageSource={require('../assets/img/power gym & fitness.jpeg')}
                    />
               </ScrollView >
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
