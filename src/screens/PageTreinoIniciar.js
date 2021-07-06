import React from 'react';
import { View } from 'react-native';
import HeaderAcad from '../components/HeaderAcad'
import ProfInfo from '../components/ProfInfo'
import Paragraph from '../components/Paragraph'
import MeuTreinoInfo from '../components/ComponentsTela/MeutreinoInfo'
import PageTreinoIniciar from '../components/ComponentsTela/PageTreinoIniciar'

import { useNavigation } from '@react-navigation/native'


export default function PageTreino({ route }) {
  const navigation = useNavigation()
  const User = {
    nome: 'Elias',
    professor: true
  }
  return (
    <>

      <HeaderAcad />
      <ProfInfo text={User.nome}></ProfInfo>
      <View>
        <Paragraph>
          Meus treinos
        </Paragraph>
        <MeuTreinoInfo />
        <PageTreinoIniciar />
        <PageTreinoIniciar />
        <PageTreinoIniciar />
        <PageTreinoIniciar />



      </View>


    </>

  )
}