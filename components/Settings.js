import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';


const Settings = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const toggleNotification = () => {
    setNotificationEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkModeContainer]}>
      <StatusBar barStyle={darkModeEnabled ? 'light-content' : 'dark-content'} />
      <Text style={[styles.pageTitle, darkModeEnabled && styles.darkModeText]}>Additional Page</Text>
      <Text style={[styles.pageContent, darkModeEnabled && styles.darkModeText]}>
        Welcome to fitflow app
      </Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, darkModeEnabled && styles.darkModeText]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, darkModeEnabled && styles.darkModeText]}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={notificationEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff', // Default background color
    color: '#000', // Default text color
  },
  darkModeContainer: {
    backgroundColor: '#121212', // Dark mode background color
    color: '#fff', // Dark mode text color
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Default text color
  },
  pageContent: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000', // Default text color
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 18,
    color: '#000', // Default text color
  },
  darkModeText: {
    color: '#fff', // Dark mode text color
  },
});

export default Settings;
