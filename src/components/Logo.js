import React, { useState }from 'react'
import { Image, StyleSheet, Animated } from 'react-native'

export default function Logo() {
  const [logo] = useState(new Animated.ValueXY({x: 220, y:104}))

  return <Animated.Image source={require('../assets/logo.png')} style={{
    width: logo.x,
    height: logo.y,
    marginBottom: 15,
    position: 'relative',
  } } />
}

// const styles = StyleSheet.create({
//   image: {
//     width: logo.x,
//     height: logo.y,
//     marginBottom: 59,
//   },
// })
