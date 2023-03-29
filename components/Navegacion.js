import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaintenanceRequest from "./MaintenanceRequest";
import Profile from "./Profile";
import Password from "./Password";
import Login from "./Login";

const Stack = createNativeStackNavigator();

function Navegacion () {
   
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >

            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="maintenance" component={MaintenanceRequest}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="password" component={Password}/>
            {/*
            import React from "react";
import { NativeBaseProvider, extendTheme, Center } from 'native-base';
import Navegacion from "./components/Navegacion";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  
  const theme = extendTheme({
    colors: {
      tema: {
        1: '#000000',
        2: '#FFFFFF',
        3: '#1B396A',
        4: '#807E82',
        5: '#8A8D8F',
        6: '#CDCDCD',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });
  
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Navegacion/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;

            */}
        </Stack.Navigator>
    )
}
export default Navegacion;
