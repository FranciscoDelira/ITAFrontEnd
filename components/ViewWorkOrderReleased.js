import React, { useState, useEffect } from "react";
import { VStack, Text, Image, Box, HStack, AlertDialog, Button, Heading, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";

function VieWorOrdRel({ navigation, route }) {
    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
    console.log('View Work order Released new')
    console.log('PersonalData ID:', personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    const { requestId } = route.params;
    console.log('request id:', requestId);
    const [requestMaintenance, setRequestMaintenance] = useState([""]);

    //Estados para abrir y cerrar alerts
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    useEffect(() => {
        //Función para obtener los datos de la solicitud
        const getMaintenanceReq = async () => {
            try {
                const response = await fetch(`http://192.168./ITABackEnd/public/api/maintenance_WorkOrder/${requestId}`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                const data = await response.json();
                setRequestMaintenance(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMaintenanceReq();
    }, [requestId]);

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Órden de trabajo de Mantenimiento</Heading>
            {requestMaintenance.map((request) => (
                <Box height="70%" w="90%" alignSelf="center" key={request}>
                    <ScrollView>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Fecha de solicitud: </Text>{request.requestDate}</Text>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Área solicitante: </Text>{request.area}</Text>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Nombre solicitante: </Text>{request.name} {request.lastname}</Text>
                        <Text _dark={{ color: "tema.2", borderColor: "tema.2" }} _light={{ color: "tema.3", borderColor: "tema.2" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Descripción:</Text>{request.requestDescription}</Text>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Evidencia:</Text>
                        <HStack space="4" alignSelf="center" marginTop="3%">
                            {request.Evidence1MR && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence1MR}`,
                                    }}
                                    alt="image1"
                                    size="md"
                                />
                            )}

                            {request.Evidence2MR && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence2MR}`,
                                    }}
                                    alt="image2"
                                    size="md"
                                />
                            )}

                            {request.Evidence3MR && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence3MR}`,
                                    }}
                                    alt="image3"
                                    size="md"
                                />
                            )}
                        </HStack>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Fecha de mantenimiento:</Text>{request.maintenanceDate}</Text>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"><Text fontWeight="bold">Trabajo realizado:</Text>{request.jobDescription}</Text>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Evidencia de trabajo:</Text>
                        <HStack space="4" alignSelf="center" marginTop="3%">
                            {request.Evidence1WO && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence1WO}`,
                                    }}
                                    alt="image1"
                                    size="md"
                                />
                            )}

                            {request.Evidence2WO && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence2WO}`,
                                    }}
                                    alt="image2"
                                    size="md"
                                />
                            )}

                            {request.Evidence3WO && (
                                <Image borderRadius={15}
                                    source={{
                                        uri: `http://192.168./ITABackEnd/storage/app/${request.Evidence3WO}`,
                                    }}
                                    alt="image3"
                                    size="md"
                                />
                            )}
                        </HStack>
                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" textAlign="center" fontWeight="bold">Estatus: <Text color="tema.10">LIBERADA</Text></Text>
                    </ScrollView>
                </Box>
            ))}
            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menworord", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="home" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/SE2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="settings" />
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

export default VieWorOrdRel;