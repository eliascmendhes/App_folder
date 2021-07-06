
import { StyleSheet } from 'react-native'
import { theme } from '../../../core/theme'
const styles = StyleSheet.create({
    container: {
      width: 328,
      height: 227,
      marginLeft: 20,
      marginTop: 5,
      borderWidth: 1,

    },

    buttons: {
      width: 334,

      marginLeft: 20,
      marginTop: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },


    background: {
      width: 86,
      height: 35,
      borderRadius: 4,
      backgroundColor: '#DDDDDD',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },


    font: {
      color: '#000000',
      fontSize: 14,
    }
  })

export default styles
