import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { theme } from '../core/theme'

// import { Container } from './styles';

const HeaderAcad = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.text}> Academia Superfit</Text>
    </View>
  )
}

const styles = StyleSheet.create({


  container: {
    padding: 20,
    width: '100%',
    height: 120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,


  },

  text: {
    fontFamily: 'Roboto',
    color: theme.colors.academic,
    right: 82,
    top: 20,
    fontSize: 26,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'center'
  }

})

export default HeaderAcad;