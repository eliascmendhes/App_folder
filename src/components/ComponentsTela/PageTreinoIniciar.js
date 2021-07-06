import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/StylesIniciar'
import PageTreinoStart from '../../screens/PageTreinoStart'
// import { Container } from './styles'; 73’
import { useNavigation } from '@react-navigation/native'

const Iniciar = (props, {route}) => {
  const navigation = useNavigation()

    return (
<>

            <View style={styles.containerTreinos}>
                <View style={styles.equipamento}>
                    <Image style={styles.imgEquipamento} source={require('../../assets/equipamentos/supinoreto.png')} />
                </View>
                <View style={styles.infoEquipamento}>
                    <Text style={styles.textEquipamento}>Supino reto</Text>
                    <View style={styles.icon}>
                        <Image source={require('../../assets/Treino/repeticao.png')} />
                        <Text style={styles.textEquipamento}>3 x 10</Text>
                    </View>
                    <View style={styles.iconTwo}>
                        <Image source={require('../../assets/Treino/descanso.png')} />
                        <Text style={styles.textEquipamento}>Supino reto</Text>
                    </View>

                    <View style={styles.teste}>
                        <TouchableOpacity
                        title="Iniciar"
                        // onPress={() => navigation.navigate('PageTreinoStart')}
                        >
                            <Text>Iniciar</Text>

                        </TouchableOpacity>
                        <Image source={require('../../assets/Treino/iniciar.png')}></Image>
                    </View>

                </View>


            </View>
        </>

    )
}

export default Iniciar;