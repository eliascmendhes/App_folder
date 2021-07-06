import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { ButtonGroup } from "react-native-elements";
import HeaderAcad from '../components/HeaderAcad'
import ProfInfo from '../components/ProfInfo'
import Paragraph from '../components/Paragraph'
import Mytabs from '../Navigation/Mytabs'
import { theme } from '../core/theme'
import { useNavigation } from '@react-navigation/native'

const MyEvolution = () => {
    const [
        selectedIndex,
        setSelectedIndex
    ] = React.useState(0);
    const [
        selectedIndexes,
        setSelectedIndexes
    ] = React.useState([]);
    const navigation = useNavigation()

    const User = {
        nome: 'Elias',
        professor: true
    }
    return (
        <>
            <HeaderAcad />
            <ProfInfo text={User.nome} />
            <Paragraph>
                Minha Evolução
            </Paragraph>
            <View style={styles.container}>
                <View style={styles.button}>
                    <ButtonGroup
                        buttonStyle={{ width: 120, borderRadius: 4, height: 30, }}
                        buttonContainerStyle={{ width: 50, backgroundColor: theme.colors.Gray }}
                        buttons={[
                            "Peso",
                            "M.Magra",
                            "Pressão",

                        ]}
                        containerStyle={{}}
                        disabled={[3, 4]}
                        disabledStyle={{}}
                        disabledTextStyle={{}}
                        disabledSelectedStyle={{}}
                        disabledSelectedTextStyle={{}}
                        innerBorderStyle={{ color: '#000000' }}
                        onPress={selectedIdx =>
                            setSelectedIndex(selectedIdx)
                        }
                        selectedButtonStyle={{}}
                        selectedIndex={selectedIndex}
                        selectedIndexes={selectedIndexes}
                        selectedTextStyle={{}}
                        textStyle={{ fontSize: 10, }}
                    />
                </View>


            </View>
            <View style={styles.containerRelatorio}>
                <View style={styles.relatorio}>

                </View></View>


            <View >
                <Button
                    title={'Ir para iniciaar treino'}
                    onPress={() => navigation.navigate('PageAluno')}
                />

                {/* <Text>{route.params.nome}</Text>
        <Text>{route.params.email}</Text> */}

            </View>

            <SafeAreaView style={styles.TabMenu}>
                <Mytabs onPress={() => navigation.navigate(component)} />
            </SafeAreaView>

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',

    },


    button: {
        width: 350,
        height: 30,
        borderRadius: 4,
    },

    containerRelatorio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    relatorio: {
        width: '100%',
        height: 540,
        borderWidth: 1,
        borderRadius: 4,
    },

    TabMenu: {
        width: 411,
        height: 40,
        marginTop: 60
    }
}

)
export default MyEvolution;