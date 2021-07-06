import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles/StylesIniciar'

// import { Container } from './styles';

const MeuTreinoInfo = () => {
  return (
      <>
      <View style={styles.container}>
                <View style={styles.containerTwo}>
                    <Image style={styles.img} source={require('../../assets/Treino/relogio.png')} />
                    <Text style={styles.text}>73’</Text>
                </View>
                <View style={styles.containerTree}>
                    <Text style={styles.textTwo}>
                        Treino A - 9
            </Text>
                </View>
            </View>

      </>

  )
}

export default MeuTreinoInfo;