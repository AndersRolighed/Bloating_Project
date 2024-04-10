import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const foodsList = [
  'Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Pineapple',
  'Carrot', 'Broccoli', 'Spinach', 'Lettuce', 'Cucumber', 'Tomato',
  'Chicken', 'Beef', 'Fish', 'Eggs', 'Milk', 'Cheese', 'Yogurt',
  'Bread', 'Rice', 'Pasta', 'Potato', 'Oats', 'Nuts', 'Seeds',
];

export default function ChooseFoodsScreen({ route }) {
  const { selectedMeal } = route.params;
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle food selection
  const handleSelectFood = (food) => {
    if (!selectedFoods.includes(food)) {
      setSelectedFoods(prevSelectedFoods => [...prevSelectedFoods, food]);
    } else {
      setSelectedFoods(prevSelectedFoods => prevSelectedFoods.filter(item => item !== food));
    }
  };

  // Function to handle saving selected foods with current date and meal type
  const handleSaveSelectedFoods = () => {
    const currentDate = new Date().toDateString();
    // Here you can save selectedFoods with currentDate and selectedMeal to your data storage
    console.log('Selected Foods:', selectedFoods);
    console.log('Meal:', selectedMeal);
    console.log('Date:', currentDate);
  };

  // Function to filter foods based on search query
  const filteredFoods = foodsList.filter(food =>
    food.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Display selected meal */}
      <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>Selected Meal: {selectedMeal}</Text>

      {/* Search input */}
      <TextInput
        style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 20 }}
        placeholder="Search Foods..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Foods list */}
      <ScrollView style={{ flex: 1 }}>
        {filteredFoods.map(food => (
          <Button
            key={food}
            title={food}
            onPress={() => handleSelectFood(food)}
            color={selectedFoods.includes(food) ? 'green' : '#007AFF'}
            style={selectedFoods.includes(food) ? styles.selectedFoodButton : styles.foodButton}
          />
        ))}
      </ScrollView>

      {/* Save button */}
      <Button
        title="Save Selected Foods"
        onPress={handleSaveSelectedFoods}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  foodButton: {
    marginVertical: 5,
  },
  selectedFoodButton: {
    marginVertical: 5,
    backgroundColor: 'lightgreen',
  },
});
