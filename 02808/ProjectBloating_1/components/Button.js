import { StyleSheet, View, Pressable, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress, placeholderImage}) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
        
      </View>
    );
  } else if (theme === "BloatingRound") {
    return (
        <View style={buttonStyles.container}>
          <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
            {placeholderImage && <Image source={placeholderImage} style={buttonStyles.placeholderImage} />}
          </TouchableOpacity>
        </View>
      );

    } else if (theme === "FoodBreakfast") {
      return (
          <View style={BreakfastStyle.container}>
            <TouchableOpacity style={BreakfastStyle.button} onPress={onPress}>
              {placeholderImage && <Image source={placeholderImage} style={BreakfastStyle.placeholderImage} />}
            </TouchableOpacity>
          </View>
        );
    } else {

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

const buttonStyles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '15%', // Adjust the vertical position as needed
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
  });

  const BreakfastStyle = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '5%', // Adjust the vertical position as needed
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
  });
  
