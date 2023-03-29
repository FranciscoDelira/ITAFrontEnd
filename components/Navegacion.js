import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./Splash";
import MaintenanceRequest from "./MaintenanceRequest";
import Profile from "./Profile";
import Password from "./Password";
import Login from "./Login";

const Stack = createNativeStackNavigator();

function Navegacion () {
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >
            {/*<Stack.Screen name="splash" component={Splash}/>*/}
             {/*LINEA DE CODIGO AGREGADA DESDE RAMA MARIANA*/}
{/*LINEA DE CODIGO AGREGADA DESDE GITHUB WEB*/}
{/*LINEA DE CODIGO AGREGADA DESDE GITHUB WEB*/}
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="maintenance" component={MaintenanceRequest}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="password" component={Password}/>
        </Stack.Navigator>

    )
}
export default Navegacion;
