import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import HeaderAcad from '../components/HeaderAcad'
import ProfInfo from '../components/ProfInfo'
import Paragraph from '../components/Paragraph'
import Treinos from '../components/ComponentsTela/Treinos'

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
        <Paragraph>
          {User.nome} - 3 treinos por semana
        </Paragraph>

      </View>

      <View >
        <Treinos time="73’" exercicio="9" />

      </View>

      <View style={styles.ViewTreino}>
        <Treinos time="84’" exercicio="9" />

      </View>

      <View style={styles.ViewTreino}>
        <Treinos time="35’" exercicio="9" />

      </View>

      <View style={styles.ViewTreino}>
        <Treinos time="45’" exercicio="9" />

      </View>

      <View >
        <Button
          title={'Ir para home'}
          onPress={() => navigation.goBack()}
        />

        {/* <Text>{route.params.nome}</Text>
        <Text>{route.params.email}</Text> */}

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ViewTreino: {
    marginTop: 13,
  },



})
