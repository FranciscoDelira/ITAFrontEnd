import React from "react";
import { useRoute } from "@react-navigation/native";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog, Text } from "native-base";
import { TouchableOpacity } from "react-native";

function MenMaiReq({ navigation }) {

    const route = useRoute();
    const personaldata_id = route.params?.personaldata_id;
    console.log(personaldata_id);

    const [Info, setIsOpen] = React.useState(false);
    const CloseI = () => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TECNM" />

            <Heading height="15%" alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" paddingTop="5%">Solicitudes de mantenimiento</Heading>

            <Box height="55%" w="90%" alignSelf="center" >

                <Button _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{bg:'tema.6'}} borderRadius="xl" h="32" 
                onPress={() => navigation.navigate("formaireq")}>
                    <Text fontSize="3xl" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Nueva solicitud</Text>
                </Button>

                <Button _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{bg:'tema.6'}} borderRadius="xl" h="32" marginTop="5%"
                onPress={() => navigation.navigate("menmaiact")}>
                    <Text fontSize="3xl" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Solicitudes activas</Text>
                </Button>

                <Button _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} _pressed={{bg:'tema.6'}} borderRadius="xl" h="32" marginTop="5%"
                onPress={() => navigation.navigate("menmaihis")}>
                    <Text fontSize="3xl" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Historial de solicitudes</Text>
                </Button>

            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("profile", { personaldata_id: personaldata_id })}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen(!Info)}>
                    <Image size="12" source={require('../assets/S1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}}>
                            <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity> 
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">"Reporta las fallas en la infraestructura dentro del TECNM campus Aguascalientes.</Text>  {"\t"}
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">Puedes consultar las solicitudes de mantenimiento activas, así como el historial de estas".</Text> 
                                <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseI}>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Aceptar</Text>
                                </Button>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                    <Image size="10" source={require('../assets/SE2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="settings" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}}>
                            <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">¿Esta seguro de cerrar sesión?</Text>
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

export default MenMaiReq;
