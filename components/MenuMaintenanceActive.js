import React, { useState, useEffect } from "react";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog, Text, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";

function MenMaiAct({ navigation, route }) {
    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
    //console.log('PersonalData ID:',personaldata_id);
    const { id } = route.params;
    //console.log('User ID:', id);

    /*Para abrir y cerrar alerts */
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [maintenanceR, setMaintenanceR] = useState([]);

    useEffect(() => {
        getMaintenanceReq()
    });

    const getMaintenanceReq = async () => {
        try {
            const response = await axios.get(
                `http://192.168./ITABackEnd/public/api/maintenance_active/${personaldata_id}`,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  "Access-Control-Allow-Origin": "*"
                }
              }
            );

            setMaintenanceR(response.data);


        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async ($id) => {
        try {
            const response = await axios.get(
                `http://192.168./ITABackEnd/public/api/maintenance_show/${$id}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            
            if (response.data.status === 'Pendiente') {
                navigation.navigate("viemaireq", {personaldata_id: personaldata_id, id: id, requestId: response.data.id});
            } else if (response.data.status === 'Por liberar') {
                navigation.navigate("viemaireq2", { personaldata_id: personaldata_id, id: id, requestId: response.data.id });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TECNM" />

            <Heading height="15%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Solicitudes de mantenimiento activas</Heading>
           
            <KeyboardAwareScrollView>
            <Box  height={"55%"} w="90%" alignSelf="center">
                {maintenanceR.map((requests) => (
                    <Box _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{ bg: 'tema.6' }} borderRadius="xl" height={"130px"} marginBottom="5%" padding={"3%"} key={requests.id}>
                        <Text bold fontSize="md" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Folio: {requests.id} </Text>
                        <Text bold fontSize="md" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Fecha de solicitud: {requests.requestDate}</Text>
                        <HStack  alignItems="center" marginTop={"8%"}>
                            <Text bold fontSize="md" _dark={{ color: "tema.8" }} _light={{ color: "tema.8" }}>{requests.status.toUpperCase()}</Text>
                            <Button size="9" marginLeft={"60%"} borderRadius={25} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => onSubmit(requests.id)}>
                                <Image size="7" source={require('../assets/PL1N.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="open" />
                            </Button>
                        </HStack>
                    </Box>
                ))}
            </Box>
            </KeyboardAwareScrollView>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menmaireq", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="home" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings", {personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/SE2N.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="settings" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">¿Esta seguro de cerrar sesión?</Text>
                                <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={() => navigation.navigate("login")}>
                                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Confirmar</Text>
                                    </Button>
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseE}>
                                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Cancelar</Text>
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </TouchableOpacity>

            </HStack>

        </VStack>
    )
}

export default MenMaiAct;
