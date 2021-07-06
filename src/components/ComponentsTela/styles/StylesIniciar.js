import React from 'react';
import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 335,
        height: 60,
        marginLeft: 20,
        borderRadius: 4,

    },

    containerTwo: {
        flexDirection: 'row',
        width: 98,
        height: 58,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    containerTree: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.containerInfo,
        width: 225,
        height: 60,
        borderRadius: 4
    },


    containerTreinos: {
        flexDirection: 'row',
        width: 330,
        height: 85,

        marginTop: 40,
        marginLeft: 20,
        borderRadius: 4,
        marginRight: 50

    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: theme.colors.white

    },

    textEquipamento: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        color: '#000000',
    },

    equipamento: {
        width: 98,
        height: 85,
    },

    infoEquipamento: {
        width: 230,
        height: 82,
        backgroundColor: theme.colors.containerInfo,
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 4

    },


    teste: {
        width: 80,
        height: 45,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: theme.colors.buttonTreino,
        marginTop: 14,



    },

    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 5
    },


    iconTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 5
    },

    img: {
        marginTop: 2,

    },

    imgEquipamento: {
        width: 98,
        height: 82
    },


})

export default styles
