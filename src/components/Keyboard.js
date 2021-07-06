import React, { useState, useEffect}from 'react';
import { View, KeyboardAvoidingView, StyleSheet, ImageBackground, Keyboard, Animated } from 'react-native';
import Logo from '../components/Logo'
import Header from '../components/Header'

// import { Container } from './styles';

const KeyboardComponent = ({ children }) => {
    const [logo] = useState(new Animated.ValueXY({x: 220, y:104}))
useEffect(() => {
    keyboardDidShowListener= Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener= Keyboard.addListener('keyboardDidHide', keyboardDidHide)

})

function keyboardDidShow () {
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }),

        Animated.timing(logo.y, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }),
    ]).start()
    // alert('teclado aberto')

}
function keyboardDidHide () {
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: 220,
            duration: 100,
            useNativeDriver: false

        }),

        Animated.timing(logo.y, {
            toValue: 104,
            duration: 100,
            useNativeDriver: false

        }),
    ]).start()
}
    return (
        <>
            <ImageBackground
                source={require('../assets/b.png')}
                resizeMode="cover"
                style={styles.background}

            >
            <Animated.Image source={require('../assets/logo.png')} style={{
    width: logo.x,
    height: logo.y,
    marginBottom: 15,
    position: 'relative',
  } } />

            <View style={styles.containerTwo}>
                <Header>Vamos treinar!</Header>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
            </View>
            </ImageBackground>

        </>

    )
}
{/* <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView> */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,



    },

    containerTwo: {
        width: 325,
        height: 391,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(234,225,225,0.7)'
    },



    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
export default KeyboardComponent;