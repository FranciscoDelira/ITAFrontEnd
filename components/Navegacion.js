import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Password from "./Password";
import ForMaiReq from "./FormMaintenanceRequest";
import ForWorOrd from "./FormWorkOrder";
import MenMaiAct from "./MenuMaintenanceActive";
import MenMaiHis from "./MenuMaintenanceHistory";
import MenMaiReq from "./MenuMaintenanceRequest";
import MenWorOrd from "./MenuWorkOrder";
import MenWorOrdApr from "./MenuWorkOrderAproved";
import MenWorOrdPen from "./MenuWorkOrderPending";
import MenWorOrdRel from "./MenuWorkOrderReleased";
import Profile from "./Profile";
import RelOrd from "./ReleasedOrder";
import Settings from "./Settings";
import VieMaiRel from "./ViewMaintenanceReleased";
import VieMaiReq from "./ViewMaintenanceRequest";
import VieWorOrdApr from "./ViewWorkOrderAprovedRealeased";
import VieWorOrdPen from "./ViewWorkOrderPending";

const Stack = createNativeStackNavigator();

function Navegacion () {
   
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="password" component={Password}/>
            <Stack.Screen name="" component={ForMaiReq}/>
            <Stack.Screen name="" component={ForWorOrd}/>
            <Stack.Screen name="" component={MenMaiAct}/>
            <Stack.Screen name="" component={MenMaiHis}/>
            <Stack.Screen name="" component={MenMaiReq}/>
            <Stack.Screen name="" component={MenWorOrd}/>
            <Stack.Screen name="" component={MenWorOrdApr}/>
            <Stack.Screen name="" component={MenWorOrdPen}/>
            <Stack.Screen name="" component={MenWorOrdRel}/>
            <Stack.Screen name="" component={Profile}/>
            <Stack.Screen name="" component={RelOrd}/>
            <Stack.Screen name="" component={Settings}/>
            <Stack.Screen name="" component={VieMaiRel}/>
            <Stack.Screen name="" component={VieMaiReq}/>
            <Stack.Screen name="" component={VieWorOrdApr}/>
            <Stack.Screen name="" component={VieWorOrdPen}/>
        </Stack.Navigator>
    )
}
export default Navegacion;
