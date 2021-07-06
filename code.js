// function Feed() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Feed!</Text>
//       </View>
//     );
//   }

//   function Profile() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Profile!</Text>
//       </View>
//     );
//   }

//   function Notifications() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Notifications!</Text>
//       </View>
//     );
//   }

//   function Evolucao() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Evolucao!</Text>
//         </View>
//       );
//     }

//   const Tab = createMaterialBottomTabNavigator();

//   function MyTabs() {
//     return (
//       <Tab.Navigator
//         initialRouteName="Feed"
//         activeColor="#e91e63"
//         labelStyle={{ fontSize: 12 }}
//         style={{ backgroundColor: 'white' }}
//       >
//         <Tab.Screen
//           name="Feed"
//           component={LoginScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color }) => (
//               <Image source={require('../../assets/AssetsMenu/Home.png')}></Image>
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Notifications"
//           component={Notifications}
//           options={{
//             tabBarLabel: 'Updates',
//             tabBarIcon: ({ color }) => (
//               <Image source={require('../../assets/AssetsMenu/Treino.png')}></Image>

//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color }) => (
//               <Image source={require('../../assets/AssetsMenu/Evolucao.png')}></Image>

//             ),
//           }}
//         />

//   <Tab.Screen
//           name="Evolucao"
//           component={Evolucao}
//           options={{
//             tabBarLabel: 'Evolucao',
//             tabBarIcon: ({ color }) => (
//               <Image source={require('../../assets/AssetsMenu/Perfil.png')}></Image>

//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }


//   // return
//   //import ImageDash from '../components/ImageDash'
// // import ImageMenus from '../components/ComponentsMenu/ImageMenus'
//   <NavigationContainer barStyle={{backgroundColor: '#fff'}} independent={true}>
//   <MyTabs />
// </NavigationContainer>


<View style={styles.containerButton}>
                        <TouchableOpacity title="Iniciar">
                            <Text>Iniciar</Text>

                        </TouchableOpacity>
                        <Image source={require('../../assets/Treino/iniciar.png')}></Image>

                    </View>