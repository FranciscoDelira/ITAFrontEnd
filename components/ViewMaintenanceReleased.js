import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, Select, CheckIcon, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";

function VieMaiRel({navigation}){

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Release, setIsOpen2] = React.useState(false);
    const CloseR = () => setIsOpen2(false);
    
    const [ReleaseC, setIsOpen3] = React.useState(false);
    const CloseC = () => setIsOpen3(false);
    
    

    return(
        <VStack height="100%" width="100%" space={4} _dark={{bg:"tema.3"}} _light={{bg:"tema.2"}}>
            <Heading _dark={{color: "tema.2"}} _light={{color: "tema.3"}} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Estado de Solicitud de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} alignSelf="flex-end" fontSize="md"><Text fontSize={'xl'} bold>Folio:</Text>0001</Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="md" marginTop="3%"> <Text bold fontSize={'xl'}>Fecha:</Text> 26/02/2023</Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" bold>Descripción: </Text>
                <TextArea _dark={{color: "tema.2", borderColor:"tema.2"}} _light={{color: "tema.3", borderColor:"tema.2"}} fontSize="md">Contactos de laboratorio de redes area C no tienen corriente</TextArea>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" bold>Evidencia: </Text>
                    <HStack justifyContent={"center"}>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="evidence1"/>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="evidence2"/>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="evidence3"/>
                    </HStack>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="md"><Text bold fontSize={'xl'}>Asignado A: </Text>Pablo :</Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="md"><Text bold fontSize={'xl'}>Fecha de Realizacion: </Text> 04/03/2023 </Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="md"><Text bold fontSize={'xl'}>Trabajo Realizado: </Text> Dpto. Sistemas y Computacion </Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" bold>Evidencia de Trabajo: </Text>
                    <HStack justifyContent={"center"}>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="workevidence1"/>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="workevidence2"/>
                    <Image source={require("../assets/PL1N.png")} size="md" alt="workevidence3"/>
                    </HStack>
                <Text alignSelf={'center'} color={'tema.12'} fontSize="md"><Text  _dark={{color: "tema.2"}} _light={{color: "tema.3"}} bold fontSize={'xl'}>Estatus: </Text> Liberada </Text>
                    
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">
                
                <TouchableOpacity onPress={() => navigation.navigate("menmaireq")}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                    <Image size="10" source={require('../assets/P1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content _dark={{bg: "tema.3"}} _light={{bg: "tema.2"}}>
                            <AlertDialog.Body _dark={{bg: "tema.3"}} _light={{bg: "tema.2"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="md" textAlign="center">¿Esta seguro de cerrar sesión?</Text>
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

export default VieMaiRel;