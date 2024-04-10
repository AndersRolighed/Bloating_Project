import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider'
import * as FileSystem from 'expo-file-system';
import moment from 'moment';
import Button from '../components/Button';
// Define an array of symptoms with their image sources
const symptoms = [
  { id: 1, name: 'Fever', imageSource: require('../assets/favicon.png'), isSelected: false },
  { id: 2, name: 'Cough', imageSource: require('../assets/favicon.png'), isSelected: false },
  { id: 3, name: 'Headache', imageSource: require('../assets/favicon.png'), isSelected: false },
  { id: 4, name: 'Fatigue', imageSource: require('../assets/favicon.png'), isSelected: false },
  { id: 5, name: 'Muscle Aches', imageSource: require('../assets/favicon.png'), isSelected: false },
  { id: 6, name: 'Shortness of Breath', imageSource: require('../assets/favicon.png'), isSelected: false },
];

const SymptomsScreen = () => {
  const [symptomsList, setSymptomsList] = useState(symptoms);
  const [bloatingSeverity, setBloatingSeverity] = useState(5); // Initial value
  const [symptomsData, setSymptomsData] = useState(null);

  // Function to toggle the isSelected state of a symptom
  const toggleSymptom = (id) => {
    setSymptomsList(prevSymptomsList =>
      prevSymptomsList.map(symptom =>
        symptom.id === id ? { ...symptom, isSelected: !symptom.isSelected } : symptom
      )
    );
  };
  
  
  const saveDataToFile = async () => {
    const entryDate = moment().format('YYYY-MM-DD HH:mm:ss');
  
    const data = {
      symptomsList,
      bloatingSeverity,
      entryDate,
    };
  
    const directory = `${FileSystem.documentDirectory}symptomsData/`;
    const filename = 'symptomsData.json'; // Use a fixed filename for all entries
    const filePath = directory + filename;
  
    try {
      // Ensure directory exists
      await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
  
      // Check if the file already exists
      const fileExists = await FileSystem.getInfoAsync(filePath);
      
      if (fileExists.exists) {
        // If the file exists, read existing data
        const existingData = await FileSystem.readAsStringAsync(filePath);
        const parsedData = JSON.parse(existingData);
  
        // Append new data to existing data
        parsedData.push(data);
  
        // Write updated data back to the file
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(parsedData));
        console.log(filePath)
      } else {
        // If the file doesn't exist, create a new file and write data
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify([data]));
      }
  
      console.log('Data saved successfully:', data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Function to read symptoms data from file
  const readSymptomsDataFromFile = async () => {
    try {
      // Define the file path
      const filePath = 'file:///data/user/0/host.exp.exponent/files/symptomsData/symptomsData.json';

      // Read the contents of the file
      const fileContents = await FileSystem.readAsStringAsync(filePath);

      const parsedData = JSON.parse(fileContents);

      setSymptomsData(parsedData);

      console.log('Symptoms data:', parsedData);
    } catch (error) {
      console.error('Error reading symptoms data:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Symptoms</Text>
      <View style={styles.gridContainer}>
        {symptomsList.map(symptom => (
          <TouchableOpacity
            key={symptom.id}
            style={[styles.gridItem, { backgroundColor: symptom.isSelected ? 'blue' : 'transparent' }]}
            onPress={() => toggleSymptom(symptom.id)}
          >
            <Image source={symptom.imageSource} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
      <View>
      {/* Button to read symptoms data */}
      <Button theme="primary" title="Read Symptoms Data" onPress={readSymptomsDataFromFile} />
      
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>How severe is your bloating?</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={bloatingSeverity}
          onValueChange={value => setBloatingSeverity(value)}
        />
        <Text style={styles.sliderValue}>{bloatingSeverity}</Text>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveDataToFile}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
      
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    gridItem: {
      width: '30%', // Adjust the width to fit 3 items in a row
      aspectRatio: 1, // Maintain aspect ratio (square)
      margin: '2%', // Adjust margin to create space between items
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'blue',
      borderRadius: 10,
    },
    image: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
    },
    sliderContainer: {
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    sliderLabel: {
      fontSize: 18,
      marginBottom: 10,
    },
    slider: {
      width: '80%',
    },
    sliderValue: {
      fontSize: 16,
      marginTop: 10,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
    },
  });
export default SymptomsScreen;
