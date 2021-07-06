import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';  ../assets/ImageDash.png

const ImageDash = ({source}) => {
    return (
        <>
            <View style={styles.container}>
                <Image styles={styles.Image} source={source}></Image>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        borderColor: "red",
        borderRadius: 40,


    },


})

export default ImageDash;