import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
      <Button theme="BloatingRound" placeholderImage={require('../assets/images/emoji4.png')} onPress={() => navigation.navigate('Symptoms')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
