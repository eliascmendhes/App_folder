import React from 'react';
import { Image, Button, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import PageTreino from '../../screens/PageTreinoIniciar'
import styles from './styles/StylesTreino'
// import { Container } from './styles';

const Treinos = (props, {route}) => {
  const navigation = useNavigation()

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerRed}>
                    <Image style={styles.configStyle} source={require('../../assets/Treino/relogio.png')} />
                    <Text style={styles.configStyleTwo}>{props.time}</Text>
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.containerInfoText}>
                        <Text style={styles.configStyleInfo}>Treino</Text>
                        <Text style={styles.configStyleInfo}>{props.exercicio} Exercicios</Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.touch}
                            onPress={() => navigation.navigate('PageTreinoIniciar')}
                        >
                            <Text style={styles.button}>Iniciar</Text>
                        </TouchableOpacity>
                        <Image style={styles.imginiciar} source={require('../../assets/Treino/iniciar.png')} />

                    </View>
                </View>
            </View>

        </>

    )
}



export default Treinos;