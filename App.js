import React from 'react';
import Home from "./screens/Home/Home"
import ListasPendientes from './screens/ListasPendientes/ListasPendientes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Historial from "./screens/Historial/Historial";
import DetalleLista from './screens/DetalleLista/DetalleLista';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Listas Pendientes" component={ListasPendientes} />
        <Stack.Screen name="Historial" component={Historial}/>
        <Stack.Screen name="Detalle Lista" component={DetalleLista} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
