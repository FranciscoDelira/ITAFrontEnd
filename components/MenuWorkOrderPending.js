import React, { useState, useEffect } from "react";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


function MenWorOrdPen({ navigation, route }) {

    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
    const { id } = route.params;
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [workOrderP, setWorkOrderP] = useState([]);

    useEffect(() => {
        getWorkOrderPending()
    });

    const getWorkOrderPending = async () => {
        try {
            const response = await axios.get(
                `http://192.168.100.93/ITABackEnd/public/api/workorder_pending/${personaldata_id}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            setWorkOrderP(response.data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TECNM" />

            <Heading height="15%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" paddingTop="5%">Ordenes de trabajo pendientes</Heading>
            <KeyboardAwareScrollView>
            <Box height="55%" w="90%" alignSelf="center" >
            {workOrderP.map((WOPending) => (
                <Box _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{ bg: 'tema.6' }} borderRadius="xl" height={"32%"} marginBottom="5%" padding={"3%"} key={WOPending.id}>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Folio: {WOPending.id}</Text>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Area solicitante: {WOPending.department}</Text>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Fecha de solicitud: {WOPending.requestDate}</Text>
                    <HStack marginTop={"5%"} alignItems="center">
                        {/* VALIDAR PARA MOSTRAR UN ESTATUS PENDIENTE O POR LIBERAR */}
                        <Text bold fontSize="sm" _dark={{ color: "tema.7" }} _light={{ color: "tema.8" }}>{WOPending.status.toUpperCase()}</Text>
                        <Button size="9" borderRadius={25} marginLeft={"58%"} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => navigation.navigate("vieworordpen",{ personaldata_id: personaldata_id, id: id })}>
                            <Image size="7" source={require('../assets/PL1N.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="open" />
                        </Button>
                    </HStack>
                </Box>
                ))}
            </Box>
            </KeyboardAwareScrollView>
            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                 <TouchableOpacity onPress={() => navigation.navigate("menworord", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="home" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("settings", { personaldata_id: personaldata_id, id: id })}>
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

export default MenWorOrdPen;