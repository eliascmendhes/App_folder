import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles/StylesVideoPlayer'
const VideoPlayer = () => {
  const url = 'https://your-url.com/video.mp4'
  return (

    <>
      <View style={styles.container}>
      </View>


      <View style={styles.controllers}>
        <View style={styles.buttons}>

          <TouchableOpacity style={styles.background}>
            <Image source={require('../../assets/Treino/left.png')} />
            <Text style={styles.font}>Anterior</Text>
          </TouchableOpacity>


          <Text>1/9</Text>

          <TouchableOpacity style={styles.background}>

            <Text style={styles.font}>Próximo</Text>
            <Image source={require('../../assets/Treino/right.png')} />

          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}


export default VideoPlayer;