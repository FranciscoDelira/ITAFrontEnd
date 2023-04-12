import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, Select, CheckIcon, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";

function FormMaintenanceRequestPending() {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Release, setIsOpen2] = React.useState(false);
    const CloseR = () => setIsOpen2(false);

    const [ReleaseC, setIsOpen3] = React.useState(false);
    const CloseC = () => setIsOpen3(false);



    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Estado de Solicitud de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} alignSelf="flex-end" fontSize="md"><Text fontSize={'xl'} bold>Folio:</Text>0001</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"> <Text bold fontSize={'xl'}>Fecha:</Text> 26/02/2023</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Descripción: </Text>
                <TextArea _dark={{ color: "tema.2", borderColor: "tema.2" }} _light={{ color: "tema.3", borderColor: "tema.2" }} fontSize="md">Contactos de laboratorio de redes area C no tienen corriente</TextArea>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Evidencia: </Text>
                <HStack justifyContent={"center"}>
                    <Image source={require("../assets/PL1N.png")} alt="image" size="md" />
                    <Image source={require("../assets/PL1N.png")} alt="image2" size="md" />
                    <Image source={require("../assets/PL1N.png")} alt="image3" size="md" />
                </HStack>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Asignado A: </Text>Pablo :</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Fecha de Realizacion: </Text> 04/03/2023 </Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Trabajo Realizado: </Text> Dpto. Sistemas y Computacion </Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Evidencia de Trabajo: </Text>
                <HStack justifyContent={"center"}>
                    <Image source={require("../assets/PL1N.png")} alt="imagen" size="md" />
                    <Image source={require("../assets/PL1N.png")} alt="imagen2" size="md" />
                    <Image source={require("../assets/PL1N.png")} alt="imagen3" size="md" />
                </HStack>
                <Text alignSelf={'center'} color={'tema.11'} fontSize="md"><Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} bold fontSize={'xl'}>Estatus: </Text> Por Liberar </Text>
                <HStack justifyContent={'center'}>
                    <Button _pressed={{ bg: 'tema.6' }} width="40%" borderRadius={"20"} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => setIsOpen2(!Release)}>
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Liberar</Text>
                        <AlertDialog isOpen={Release} onClose={CloseR}>
                            <AlertDialog.Content _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
                                <AlertDialog.Body _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignSelf="center">
                                    <TouchableOpacity onPress={CloseR}>
                                        <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                    </TouchableOpacity>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" textAlign="center">¿Esta seguro de liberar la solicitud de mantenimiento?</Text>
                                    <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                        <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => setIsOpen3(!ReleaseC)}>
                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Confirmar</Text>
                                            <AlertDialog isOpen={ReleaseC} onClose={CloseC}>
                                                <AlertDialog.Content _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
                                                    <AlertDialog.Body _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignSelf="center">
                                                        <TouchableOpacity onPress={CloseC}>
                                                            <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                                        </TouchableOpacity>
                                                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" textAlign="center">¡Solicitud Liberada Correctamente!</Text>
                                                        <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={CloseR}>
                                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Aceptar</Text>
                                                        </Button>
                                                    </AlertDialog.Body>
                                                </AlertDialog.Content>
                                            </AlertDialog>
                                        </Button>
                                        <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={CloseR}>
                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
                                        </Button>
                                    </Button.Group>
                                </AlertDialog.Body>
                            </AlertDialog.Content>
                        </AlertDialog>
                    </Button>

                    <Button _pressed={{ bg: 'tema.6' }} width="40%" borderRadius={"20"} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} >
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Cancelar</Text>
                    </Button>

                </HStack>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">
                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image size="10" source={require('../assets/P1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" textAlign="center">¿Esta seguro de cerrar sesión?</Text>
                                <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("login")}>
                                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Confirmar</Text>
                                    </Button>
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={CloseE}>
                                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
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

export default FormMaintenanceRequestPending;