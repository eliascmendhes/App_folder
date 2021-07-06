import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import HeaderAcad from '../components/HeaderAcad'
import ProfInfo from '../components/ProfInfo'
import WelcomeDash from '../components/WelcomeDash'
import Paragraph from '../components/Paragraph'
import ImageDash from '../components/ImageDash'
import Mytabs from '../Navigation/Mytabs'



export default function Dashboard({ navigation }) {
  const User = {
    nome: 'Professor: Elias',
    professor: true

  }
  return (
    <>

      <SafeAreaView>
        <HeaderAcad />
        <ProfInfo text={User.nome}></ProfInfo>
        <WelcomeDash nome={' Elias'}></WelcomeDash>


        <View>
          <Paragraph>
            Meus treinos
          </Paragraph>
          <TouchableOpacity onPress={() => {
            navigation.navigate("PageTreino")
          }}>
            <ImageDash source={require('../assets/ImageDash.png')}></ImageDash>
          </TouchableOpacity>

        </View>



        <View>
          <Paragraph>
            Meus horários
          </Paragraph>
          <TouchableOpacity onPress={() => {
            navigation.navigate("PageTreinoIniciar")
          }}>
            <ImageDash source={require('../assets/meushorarios.png')}></ImageDash>
          </TouchableOpacity>
        </View>

        <View>
          <Paragraph>
            Minha evolução
          </Paragraph>
          <TouchableOpacity onPress={() => {
            navigation.navigate("MyEvolution")
          }}>
            <ImageDash source={require('../assets/minhaevolucao.png')}></ImageDash>
          </TouchableOpacity>
        </View>



      </SafeAreaView>

      <SafeAreaView style={styles.TabMenu}>
        <Mytabs onPress={() => navigation.navigate(component)} />
      </SafeAreaView>

    </>
  )
}


const styles = StyleSheet.create({
  TabMenu: {
    width: 411,
    height: 40,
    marginTop: 60
  }
})
