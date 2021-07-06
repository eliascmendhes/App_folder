import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import VideoPlayer from './VideoPlayer'
import styles from './styles/StylesVideoTreino'

const VideoTreino = () => {
    return (
        <>
            <View style={styles.Info}>
                <View >
                    <Text style={styles.title}>Supino Reto</Text>

                </View>

                <View style={styles.ImageInfo}>
                    <Image style={styles.margin} source={require('../../assets/Treino/repeticao.png')} />
                    <Text style={styles.margin} >3x10</Text>
                    <Image style={styles.margin} source={require('../../assets/Treino/descanso.png')} />
                    <Text style={styles.margin} >45</Text>
                </View>
            </View>


            <View style={styles.VideoPlayer}>
            </View>
        </>

    )
}


export default VideoTreino;