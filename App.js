
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";


//importacion de la diferentes ventanas para que sean navegables
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from "./src/screens/SplashScreenView";
import NoteScreen from "./src/screens/NoteScreen";

const Stack = createStackNavigator();

export default function App() {

  //constantes para saber que mostrams en pantalla
  const [isSplash,setIsSplash]=useState(true);

  //pasados 4 segundos cambiamos el estado de la varible para cambiar de ventana
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsSplash(false);
    },3000)

 
  // Limpiamos el temporizador una vez se pase de pantalla
  return () => clearTimeout(timer);
}, []);

// Si la pantalla de SplashScreen sigue activa, mostramos SplashScreen
if (isSplash) {
  return <SplashScreen />;
}

// Navegación entre pantallas
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}  // Ocultamos la barra de navegacion
      />
      <Stack.Screen 
        name="Note" 
        component={NoteScreen}
        options={{ headerShown: false }}  // Ocultamos la barra de navegacion
      />
    </Stack.Navigator>
  </NavigationContainer>
);
}
