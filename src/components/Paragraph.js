import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    lineHeight: 21,
    marginBottom: 12,
    margin: '5%',
    fontWeight: 'bold',
  },
})
