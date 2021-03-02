import React from 'react';
import Home from "./screens/Home/Home"
import ListasPendientes from './screens/ListasPendientes/ListasPendientes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Historial from "./screens/Historial/Historial";
=======
import DetalleLista from './screens/DetalleLista/DetalleLista';

>>>>>>> cc6253842744f0ace3aa590c1d9132a0b45f9eed

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
<<<<<<< HEAD
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Listas Pendientes" component={ListasPendientes} />
        <Stack.Screen name="Historial" component={Historial}/>
=======
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Listas Pendientes" component={ListasPendientes} options={{headerShown: false}}/>
        <Stack.Screen name="Detalle Lista" component={DetalleLista} options={{headerShown: false}}/>
>>>>>>> cc6253842744f0ace3aa590c1d9132a0b45f9eed
      </Stack.Navigator>
    </NavigationContainer>
  );
}
