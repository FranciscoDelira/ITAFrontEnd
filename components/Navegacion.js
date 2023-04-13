import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenMaiReq from "./MenuMaintenanceRequest";
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
        </Stack.Navigator>
    )
}
export default Navegacion;
