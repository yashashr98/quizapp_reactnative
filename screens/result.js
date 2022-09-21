import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner= score>10?"https://as1.ftcdn.net/v2/jpg/02/22/15/34/1000_F_222153477_wfNvWU8L7hEtuehKhJgxiGwq1hoGAbcx.jpg" :"https://media.nojoto.com/wallpaper/main/wallpaper-2019-08-05-13-35-07-13bf0234d6e193c7b1c5ff59b955bff9.jpg"
  return (
    <View style={styles.container}>
<Title titleText='RESULTS' />
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
  <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center'
  }
});
