import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

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

  const { phoneNumber, gender: initialGender, fullName: initialFullName, email } = params;

  const [profileImage, setProfileImage] = useState(require('../assets/profile.png'));
  const [fullName, setFullName] = useState(initialFullName);
  const [gender, setGender] = useState(initialGender);
  const [isImageUpdated, setIsImageUpdated] = useState(false);

  const capitalizeFullLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleUpdateImage = () => {
    setIsImageUpdated(true);
  };

  const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleGenderChange = (value) => {
    setGender(value);
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
          <View style={styles.genderContainer}>
            <Text style={styles.label}>Gender:</Text>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: 150 }}
              onValueChange={handleGenderChange}>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>
      </View>
      {isImageUpdated ? (
        <TouchableOpacity style={styles.updatedButton} disabled={true}>
          <Text style={styles.buttonText}>Profile Image Updated</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateImage}>
          <Text style={styles.buttonText}>Update Profile Image</Text>
        </TouchableOpacity>
      )}
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
    justifyContent: 'center',
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
  updatedButton: {
    marginTop: 20,
    backgroundColor: '#28a745', // Green color indicating success
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    width: '100%',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
  },
});

export default Profile;
