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
import VieMaiReq2 from "./ViewMaintenaceRequest2";

const Stack = createNativeStackNavigator();

function Navegacion () {
   
    return(
        <Stack.Navigator screenOptions={{headerShown: false }} >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="password" component={Password}/> 
            <Stack.Screen name="formaireq" component={ForMaiReq}/>
            <Stack.Screen name="forworord" component={ForWorOrd}/>
            <Stack.Screen name="menmaiact" component={MenMaiAct}/>
            <Stack.Screen name="menmaihis" component={MenMaiHis}/>
            <Stack.Screen name="menmaireq" component={MenMaiReq}/> 
            <Stack.Screen name="menworord" component={MenWorOrd}/> 
            <Stack.Screen name="menwordordapr" component={MenWorOrdApr}/>
            <Stack.Screen name="menworordpen" component={MenWorOrdPen}/>
            <Stack.Screen name="menworordrel" component={MenWorOrdRel}/>
            <Stack.Screen name="profile" component={Profile}/>
            <Stack.Screen name="relord" component={RelOrd}/>
            <Stack.Screen name="settings" component={Settings}/> 
            <Stack.Screen name="viemairel" component={VieMaiRel}/>
            <Stack.Screen name="viemaireq" component={VieMaiReq}/>
            <Stack.Screen name="viemaireq" component={VieMaiReq2}/>
            <Stack.Screen name="vieworordapr" component={VieWorOrdApr}/>
            <Stack.Screen name="vieworordpen" component={VieWorOrdPen}/>
        </Stack.Navigator>
    )
}
export default Navegacion;
