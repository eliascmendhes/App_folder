import {StyleSheet} from 'react-native'
import { theme } from '../../../core/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',


    },

    button: {
        alignItems: 'center',
        position: 'relative',
    },


    background: {
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    player: {
        width: 25,
        height: 25,
        backgroundColor: '#000000',
        marginTop: 2,
    }
})

export default styles