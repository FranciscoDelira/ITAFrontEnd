import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaintenanceRequest from "./MaintenanceRequest";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";
import Password from "./Password";

const Stack = createNativeStackNavigator();

function Navegacion () {
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="maintenance" component={MaintenanceRequest}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="settings" component={Settings}/>
            <Stack.Screen name="password" component={Password}/>
        </Stack.Navigator>
    )
}
export default Navegacion;
