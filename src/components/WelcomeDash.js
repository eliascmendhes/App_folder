import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../core/theme'

// import { Container } from './styles';

const WelcomeDash = (props) => {
    return (
        <View>
            <Text style={styles.text}>Seja bem vindo,{props.nome}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    text: {
      display: 'flex',
      fontSize: 16,
      fontFamily: 'Roboto',
      color: theme.colors.text,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: '5%'
    },
})
export default WelcomeDash;