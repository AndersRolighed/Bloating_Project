import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';


function HomeScreen({ navigation }) {
  const handleMealSelection = (meal) => {
    navigation.navigate('ChooseFoods', { selectedMeal: meal });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
       <View style={styles.mealButtonsContainer}>
        <TouchableOpacity
          style={styles.mealButton}
          onPress={() => handleMealSelection('Breakfast')}
        >
          <Text>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mealButton}
          onPress={() => handleMealSelection('Lunch')}
        >
          <Text>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mealButton}
          onPress={() => handleMealSelection('Dinner')}
        >
          <Text>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mealButton}
          onPress={() => handleMealSelection('Snacks')}
        >
          <Text>Snacks</Text>
        </TouchableOpacity>
      </View>
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
  mealButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  mealButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
});

export default HomeScreen;