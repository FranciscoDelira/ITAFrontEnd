import React, { useState, useEffect } from "react";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


function MenWorOrdRel({ navigation, route }) {

    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
   // console.log('PersonalData ID:', personaldata_id);
    const { id } = route.params;
   // console.log('User ID:', id);
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [workOrderR, setWorkOrderR] = useState([]);

    useEffect(() => {
        getWorkOrderReleased()
    });

    const getWorkOrderReleased = async () => {
        try {
            const response = await axios.get(
                `http://192.168./ITABackEnd/public/api/workorder_released/${personaldata_id}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            setWorkOrderR(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TECNM" />

            <Heading height="15%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl">Ordenes de trabajo liberadas</Heading>
            
            <KeyboardAwareScrollView>
            <Box height="55%" w="90%" alignSelf="center" >
                {workOrderR.map((WOReleased) => (
                    <Box _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{ bg: 'tema.6' }} borderRadius="xl" height={"130px"} marginBottom="5%" padding={"3%"} key={WOReleased.WOid}>
                        <Text bold fontSize="md" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Folio: {WOReleased.WOid}</Text>
                        <Text bold fontSize="md" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Area solicitante: {WOReleased.department}</Text>
                        <Text bold fontSize="md" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Fecha de solicitud: {WOReleased.requestDate}</Text>
                        <HStack alignItems="center">
                            <Text bold fontSize="md" _dark={{ color: "tema.10" }} _light={{ color: "tema.10" }}>{WOReleased.status.toUpperCase()}</Text>
                            <Button size="9" borderRadius={25} marginLeft={"60%"} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => navigation.navigate("vieworordrel", { personaldata_id: personaldata_id, id: id, requestId: WOReleased.WOid})}>
                                <Image size="7" source={require('../assets/PL1N.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="open" />
                            </Button>
                        </HStack>
                    </Box>
                ))}
            </Box>
            </KeyboardAwareScrollView>
            
            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menworord", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="maintenance" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/SE2N.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="password" />
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

export default MenWorOrdRel;
