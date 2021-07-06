import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const MyEvolutionComp = () => {
    return (
        <>
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
    }
})
export default MyEvolutionComp;