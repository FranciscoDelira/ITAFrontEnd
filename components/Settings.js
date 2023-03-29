import React from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, Button, Input, AlertDialog } from "native-base";
import { TouchableOpacity } from "react-native";

function Settings({ navigation }) {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    {/* const {colorMode, toggleColorMode} = useColorMode(); */ }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading height="20%" alignSelf="center" _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} fontSize="4xl" marginTop="10%" paddingTop="10%">Cambio de contraseña</Heading>

            <Avatar height="15%" width="30%" alignSelf="center" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }}>
            </Avatar>

            <Box height="45%" alignSelf="center" p="2">
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Contraseña actual: </Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} p="2">*******************</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Nueva contraseña: </Text>
                <Input color={"tema.3"} size={"md"} _focus={{ backgroundColor: "tema.2" }} placeholder="Escriba su nueva contraseña" p="2" />
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Confirmar contraseña: </Text>
                <Input color={"tema.3"} size={"md"} _focus={{ backgroundColor: "tema.2" }} placeholder="Confirme su nueva contraseña" p="2" />
                <Button _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} marginTop="10%" width="25%" alignSelf="center">
                    Guardar
                </Button>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6">

                <TouchableOpacity onPress={() => navigation.navigate("maintenance")}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="maintenance" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <Image size="10" source={require('../assets/U1B.png')} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} alt="exit" />
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

            {/* <Button onPress={()=>{toggleColorMode();newTheme(colorMode)}}>Toggle</Button> */}

        </VStack>
    )
}
export default Settings; 
