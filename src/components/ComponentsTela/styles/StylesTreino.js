import React from 'react';
import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: 335,
        height: 98,

        borderRadius: 4,
        marginLeft: 20,
    },

    containerRed: {
        flexDirection: 'row',
        width: 100,
        height: 98,
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    containerButton: {
        width: 120,
        height: 45,
        flexDirection: 'row',
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.buttonTreino,
        borderRadius: 4,


    },


    configStyle: {
        marginLeft: 15,
        marginTop: 20
    },

    configStyleTwo: {
        marginRight: 10,
        marginTop: 20,
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

    configStyleInfo: {
        color: theme.colors.text,
        marginLeft: 10,
        marginTop: 10,
        fontSize: 13,
        fontWeight: 'bold',

    },


    containerInfo: {
        flexDirection: 'row',
        width: 260,
        height: 99,
        backgroundColor: theme.colors.containerInfo,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,

    },

    containerInfoText: {
        width: 97,
        height: 73,
        marginLeft: 10,


    },

    touch: {
    },

    button: {
        color: theme.colors.text,

    },

    imginiciar: {
        marginLeft: 4
    }


})


export default styles