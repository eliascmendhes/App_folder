import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageTreino from '../screens/PageTreino'
import PageTreinoIniciar from '../screens/PageTreinoIniciar'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#E7CFCF',
                backgroundColor: '#E7CFCF'
            }}
        >
            <Tab.Screen
                name="PageTreino"
                onPress={() => navigation.navigate("PageTreino")}
                component={PageTreino}

                options={{
                    tabBarLabel: 'PageTreino',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.img} source={require('../assets/AssetsMenu/Home.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="PageTreinoIniciar"
                component={PageTreinoIniciar}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.img} source={require('../assets/AssetsMenu/Treino.png')} />

                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={PageTreinoIniciar}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.img} source={require('../assets/AssetsMenu/Horario.png')} />

                    ),
                }}
            />

            <Tab.Screen
                name="Evolucao"
                component={PageTreinoIniciar}
                options={{
                    tabBarLabel: 'Evolucao',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.img} source={require('../assets/AssetsMenu/Evolucao.png')} />

                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={PageTreinoIniciar}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.img} source={require('../assets/AssetsMenu/Perfil.png')} />

                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
    }
})

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
}