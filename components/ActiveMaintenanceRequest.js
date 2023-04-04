import React from "react";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog, Text } from "native-base";
import { TouchableOpacity } from "react-native";

function ActiveMainRe({ navigation }) {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TECNM" />

            <Heading height="15%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" paddingTop="5%">Ordenes de trabajo aprobadas</Heading>

            <Box height="55%" w="90%" alignSelf="center" >
                <Box _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{ bg: 'tema.6' }} borderRadius="xl" height={"32%"} marginBottom="5%" padding={"3%"}>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Folio: </Text>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Area solicitante: </Text>
                    <Text bold fontSize="xs" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Fecha de solicitud: </Text>
                    <HStack marginTop={"5%"} alignItems="center">
                        <Text bold fontSize="sm" _dark={{ color: "tema.10" }} _light={{ color: "tema.10" }}>APROBADA</Text>
                        <Button size="9" borderRadius={25} marginLeft={"58%"} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => navigation.navigate("")}>
                            <Image size="7" source={require('../assets/PL1N.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="open" />
                        </Button>
                    </HStack>
                </Box>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                 <TouchableOpacity onPress={() => navigation.navigate("maintenance")}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="maintenance" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("settings")}>
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

export default ActiveMainRe;
