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
        7: '#FF0000',
        8: '#D00000',
        9: '#FF8000',
        10: '#029424',
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