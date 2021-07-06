import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity }  from 'react-native';
import styles from './styles/ButtonPlayer'
// import { Container } from './styles';

const ButtonPlayer = () => {
  return (
      <>
      <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('oi')} style={styles.background}>
                    <Text>31 s</Text>
                    <View style={styles.player}>

                    </View>
                </TouchableOpacity>
          </View>
      </View>

      </>

  )
}

export default ButtonPlayer;

{/* <Image title="31s" source={require('../../assets/Treino/ellipseplayvideo.png')}></Image>
            <Text>31s</Text> */}