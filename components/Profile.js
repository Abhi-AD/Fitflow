import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Profile = () => {
  const route = useRoute();
  const { params } = route;
  if (!params) {
    return (
      <View style={styles.container}>
        <Text>Error: Parameters not passed</Text>
      </View>
    );
  }
  const { phoneNumber, gender, fullName, email } = params;

  const [profileImage, setProfileImage] = useState(require('../assets/profile.png'));

  const handleUpdateImage = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Name: {fullName}</Text>
          <Text style={styles.userInfoText}>Phone: {phoneNumber}</Text>
          <Text style={styles.userInfoText}>Email: {email}</Text>
          <Text style={styles.userInfoText}>Gender: {gender}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateImage}>
        <Text style={styles.buttonText}>Update Profile Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the profileContainer horizontally
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    marginLeft: 20,
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
