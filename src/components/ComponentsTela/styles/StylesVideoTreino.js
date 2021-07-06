
import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'


const styles = StyleSheet.create({
    Info: {
        width: 335,
        height: 49,
        marginLeft: 20,
    },

    title: {
        flexDirection: 'row',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },

    ImageInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 4

    },



    margin: {
        marginLeft: 5
    },


    // VideoPlayer: {
    //     marginTop: 3,
    //     marginLeft: 20,

    //     borderWidth: 1,
    //     width: 334,
    //     height: 227,
    //     justifyContent: 'center',
    //     backgroundColor: 'black',
    // }
})

export default styles;