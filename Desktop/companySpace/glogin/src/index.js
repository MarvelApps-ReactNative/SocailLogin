/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Index = () => {
  const signIn = () => {};

  GoogleSignin.configure({
    webClientId:
      '249815106110-lr7plguh6sb8bksas6987gds6a7f3eiv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  });

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log('line no 19', userInfo);

      //   Alert.alert(JSON.stringify(userInfo));
      //   setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const RenderGoogle = () => {
    return (
      <TouchableOpacity
        style={styles.googleContainer}
        onPress={signInWithGoogle}>
        <Image source={require('./images/google.png')} style={styles.img} />
        <Text style={styles.txt}>Sign in with Google</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.uperContainer}>
        <Image source={require('./images/logo.png')} style={styles.logoimg} />
      </View>
      <View style={styles.boxContainer}>
        <RenderGoogle />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  googleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.95)',
    height: 50,
    width: 280,
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: 10,
    margin: 5,
  },
  txt: {
    paddingLeft: 10,
    fontWeight: '400',
    fontSize: 18,
  },
  img: {height: 45, width: 45, resizeMode: 'contain'},
  logoimg: {height: 200, width: 200, resizeMode: 'contain'},
  uperContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxContainer: {
    flex: 0.4,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
  },
});
