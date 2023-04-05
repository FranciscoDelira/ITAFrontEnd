import React from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, Button, AlertDialog } from "native-base";
import { TouchableOpacity } from "react-native";

function Settings({ navigation }) {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    {/* const {colorMode, toggleColorMode} = useColorMode(); */}

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading height="10%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" marginTop="20%" >Configuracion</Heading>

            <Avatar height="12%" width="25%" marginLeft={"5%"} source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }}>
            </Avatar>

            <Box height="53%" width={"95%"} alignSelf="center" p="2">
                <HStack alignItems="center">
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >Cambiar contraseña</Text> 
                    <Button size="9" borderRadius={25} marginLeft={"30%"} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => navigation.navigate("")}>
                        <Image size="7" source={require('../assets/PL1N.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="open" />
                    </Button>
                </HStack>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >Referencia a la Norma ISO 9001:2015 6.1, 7.1, 7.2, 7.4, 7.5.1, 8.1</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >“ITA-AD-PO-001-02 Formato para solicitud de Mantenimiento Correctivo”</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >“ITA-AD-PO-001-04 Formato para Orden de Trabajo de Mantenimiento”</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >Desarrollado por SOLUTEC</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >Versión 1.0</Text>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6">

                <TouchableOpacity onPress={() => navigation.navigate("maintenance")}>
                    <Image size="10" source={require('../assets/C1A.png')} alt="maintenance" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <Image size="10" source={require('../assets/U1A.png')} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2A.png')} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content bg="white">
                            <AlertDialog.Body bg="white" _text={{
                                color: "blue.900",
                                fontSize: "md",
                                textAlign: "center"
                            }}>
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} alt="close" />
                                </TouchableOpacity>
                                ¿Esta seguro de cerrar sesión?
                                <Button.Group marginTop="10%" alignSelf={"flex-end"} colorScheme="darkBlue" borderRadius="xl">
                                    <Button onPress={() => navigation.navigate("login")}>
                                        Confirmar
                                    </Button>
                                    <Button onPress={CloseE}>
                                        Cancelar
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </TouchableOpacity>

            </HStack>

 {/* <Button onPress={()=>{toggleColorMode();newTheme(colorMode)}}>Toggle</Button>*/}

        </VStack>
    )
}
export default Settings; 
