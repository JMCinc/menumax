import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/menumax_bg.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
       <View style={styles.headerText}>
        <Image
          source={require('../../../assets/images/logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to MenuMax</Text>
        <Text style={styles.subtitle}>
          Your number one food ordering and delivery app.
        </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} 
             style={styles.signUpButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} 
            style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerText:{
    marginTop: '10',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginBottom: 2,
    backgroundColor: '', // add a semi-transparent white background
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    fontfamily: 'native:MainBold',

  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 80,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '95%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  signUpButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    color: 'white',
  },
  signInButton: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 3,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: `#e0ffff`,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
