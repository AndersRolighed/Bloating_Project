import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const RoundButton = ({ onPress, placeholderImage }) => {
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
        {placeholderImage && <Image source={placeholderImage} style={buttonStyles.placeholderImage} />}
      </TouchableOpacity>
    </View>
  );
};

export default RoundButton;


const buttonStyles = {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '30%', // Adjust the vertical position as needed
      left: 0,
      right: 0,
    },
    button: {
      width: 150, // Adjust the width of the button
      height: 150, // Adjust the height of the button
      borderRadius: 75, // Make the button round by setting borderRadius to half of the width/height
      backgroundColor: 'blue', // Change the background color of the button
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white', // Change the color of the button text
      fontSize: 16, // Adjust the font size of the button text
    },
    placeholderImage: {
      width: 100, // Adjust the width of the placeholder image
      height: 100, // Adjust the height of the placeholder image
      resizeMode: 'contain', // Adjust the resize mode of the image
    },
  };
  