import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Hor } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your preferred icon library
import { BlurView } from '@react-native-community/blur';

const CardDetails = ({ route, navigation }) => {
     const { title, content, imageSource, email, owner, phonenumber } = route.params;

     const handleJoinWithCode = () => {
          navigation.navigate('JoinWithCode');
     };

     return (
          <View style={styles.container}>
               <ScrollView>
                    <View style={styles.header}>
                         <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                              <View style={styles.closeIcon}>
                                   <Icon name="close" size={25} color="black" />
                              </View>
                         </TouchableOpacity>

                         <View style={styles.cardImageContainer}>
                              <Image source={imageSource} style={styles.cardImage} />
                         </View>
                         <View style={styles.logoContainer}>
                              <Image source={imageSource} style={styles.logo} />
                              <View style={styles.detailsContainer}>
                                   <Text style={styles.title}>{title}</Text>
                                   <Text style={styles.detailText}>{content}</Text>
                                   <View style={styles.detailRow}>
                                        <Icon name="user" size={20} color="white" style={styles.icon} />
                                        <Text style={styles.detailText}>{owner}</Text>
                                   </View>
                                   <View style={styles.detailRow}>
                                        <Icon name="envelope" size={25} color="#DDF44C" style={styles.icon} />
                                        <Text style={styles.detailText}>{email}</Text>
                                   </View>
                                   <View style={styles.detailRow}>
                                        <Icon name="phone" size={30} color="#DDF44C" style={styles.icon} />
                                        <Text style={styles.detailText}>{phonenumber}</Text>
                                   </View>
                              </View>
                         </View>
                    </View>



                    <View style={styles.body}>
                         <Text style={styles.body_title}>Join with Organization Code</Text>
                         <Text style={styles.body_content}>If you have an organization code, you can directly join by using a unique 8-character code.</Text>
                         <TouchableOpacity style={styles.button} onPress={handleJoinWithCode}>
                              <Text style={styles.buttonText}>Join With Code</Text>
                         </TouchableOpacity >
                    </View>
                    <View style={styles.footer}>
                         <Text style={styles.footer_title}>Or, you can request for Membership.</Text>
                         <TouchableOpacity style={styles.footer_button} onPress={() => navigation.goBack()}>
                              <Text style={styles.footer_buttonText}>Request Membership</Text>
                         </TouchableOpacity >
                    </View>
               </ScrollView>
          </View>
     );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'black',
     },
     // clse icon 
     closeButton: {
          position: 'absolute',
          top: 50,
          right: 30,
          zIndex: 999,
     },
     closeIcon: {
          backgroundColor: 'white',
          // borderRadius: (windowWidth * 0.3) / 2,
          borderRadius: 50, // Half of the size of the icon
          padding: 5,
     },
     cardImageContainer: {
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: 40,
          alignContent: 'center'
     },
     logoContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     title: {
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10,
          textTransform: 'uppercase',
     },
     cardImage: {
          width: windowWidth,
          height: windowHeight * 0.5, // Covering 50% of the window height
          resizeMode: 'cover',

     },
     detailsContainer: {
          alignItems: 'center', // Aligning items to center
          borderColor: '#ddd',
          borderRadius: 5,
          padding: 10,
          marginTop: 5,
     },
     detailText: {
          fontSize: 16,
          marginBottom: 5,
          color: 'white',
     },
     logo: {
          marginTop: "-60%",
          width: windowWidth * 0.3,
          height: windowWidth * 0.3,
          borderRadius: (windowWidth * 0.3) / 2,
          overflow: 'hidden',
          borderWidth: 2,
          borderColor: 'white', // Border color
     },
     detailRow: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     icon: {
          marginRight: 5,
     },
     // body
     body_title: {
          color: "#868681",
          fontSize: 19,
          lineHeight: 24,
          marginLeft: 40,
          marginRight: 40,
     },
     body_content: {
          color: "#868681",
          fontSize: 14,
          lineHeight: 20,
          marginLeft: 40,
          marginRight: 40,
          marginTop: 10,
     },
     button: {
          backgroundColor: '#DDF44C',
          padding: 20,
          alignSelf: 'stretch',
          marginTop: 10,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
     },
     buttonText: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
     },
     // footer
     footer_title: {
          color: "#868681",
          fontSize: 19,
          lineHeight: 24,
          marginLeft: 40,
          marginRight: 40,
     },
     footer_button: {
          backgroundColor: '#ABE88C',
          padding: 20,
          alignSelf: 'stretch',
          marginTop: 10,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
     },
     footer_buttonText: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
     },
     header: {
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 10,
          marginLeft:10,
          marginRight:10,
     },
     body: {
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 10,
          marginLeft:10,
          marginRight:10,
     },
     footer: {
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 10,
          marginLeft:10,
          marginRight:10,
     },
});

export default CardDetails;
