import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { theme } from '../core/theme'

// import { Container } from './styles';

const ProfInfo = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image source={require('../assets/avatar.png')}></Image>
        </View>
        <View style={styles.texto}>
          <Text style={styles.text}>{props.text}</Text>

        </View>

        <View style={styles.Wpp}  >
          <Image source={require('../assets/Wpp.png')} />
          <Image source={require('../assets/sincronize.png')} />


        </View>

      </View>



    </>

  )
}

const styles = StyleSheet.create({


  container: {
    display: 'flex',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.Gray,
    alignItems: 'center'


  },

  img: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  texto: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },





  text: {
    color: theme.colors.text,
    fontSize: 16,

  },




  Wpp: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
  }
})
export default ProfInfo;