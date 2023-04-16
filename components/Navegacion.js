import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenMaiReq from "./MenuMaintenanceRequest";
import MaintenanceRequest from "./MaintenanceRequest";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";
import Password from "./Password";
import ReleasedOrder from "./ReleasedOrder";
import ApprovedOrder from "./MenuWorkOrderAproved";
import PendingOrder from "./MenuWorkOrderPending";
import MenMaiAct from "./MenuMaintenanceActive";
import MenMaiHis from "./MenuMaintenanceHistory";

const Stack = createNativeStackNavigator();

function Navegacion () {
   
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >

            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="maintenance" component={MenMaiReq}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="settings" component={Settings}/>
            <Stack.Screen name="password" component={Password}/>
            <Stack.Screen name="releasedO" component={ReleasedOrder}/>
            <Stack.Screen name="approvedO" component={ApprovedOrder}/>
            <Stack.Screen name="pendingO" component={PendingOrder}/>
            <Stack.Screen name="activemainre" component={MenMaiAct}/>
            <Stack.Screen name="historyre" component={MenMaiHis}/>
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
