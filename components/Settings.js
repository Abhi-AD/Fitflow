import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';

const Settings = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [offlineModeEnabled, setOfflineModeEnabled] = useState(false); // New state for offline mode

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const toggleNotification = () => {
    setNotificationEnabled(previousState => !previousState);
  };

  const toggleOfflineMode = () => { // New function to toggle offline mode
    setOfflineModeEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkModeContainer]}>
      <StatusBar barStyle={darkModeEnabled ? 'light-content' : 'dark-content'} backgroundColor={darkModeEnabled ? '#121212' : '#fff'} />
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
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, darkModeEnabled && styles.darkModeText]}>Offline Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={offlineModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleOfflineMode}
          value={offlineModeEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 50,
    backgroundColor: '#fff',
    color: '#000',
  },
  darkModeContainer: {
    backgroundColor: '#121212',
    color: '#fff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  pageContent: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 18,
    color: '#000',
  },
  darkModeText: {
    color: '#fff',
  },
});

export default Settings;
