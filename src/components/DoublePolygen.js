import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const DoublePolygen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ployf.png')} style={[styles.image]} />
      <Image
        source={require('../assets/ployt.png')}
        style={[styles.image, styles.secondImage]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: 64,
    height: 64,
    position: 'absolute',
  },
  secondImage: {
    top: 0,
    left: 10,
  },
});
export default DoublePolygen;
