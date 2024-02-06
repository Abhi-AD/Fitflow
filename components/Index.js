import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToOTPPage = () => {
    navigation.navigate('NextScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index Screen</Text>
      <TouchableOpacity onPress={handleNavigateToOTPPage}>
        <Text>Go to OTP Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;
