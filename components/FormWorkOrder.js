import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, TextArea, Divider } from "native-base";
import { TouchableOpacity } from "react-native";

function ForWorOrd({navigation}) {
    const [Info, setIsOpen] = React.useState(false);
    const CloseI = () => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Send, setIsOpen2] = React.useState(false);
    const CloseS = () => setIsOpen2(false);

    const [Confirm, setIsOpen3] = React.useState(false);
    const CloseC = () => setIsOpen3(false);

    return (
        <VStack height="100%" width="100%" space={4} >
            <Heading _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Órden de trabajo de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">
                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} alignSelf="flex-end" fontSize="md">Folio: 001</Text>
                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" marginTop="3%">Fecha de mantenimiento: <Date></Date></Text>
                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" marginTop="3%">Trabajo realizado:</Text>
                <TextArea h={40} _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}></TextArea>
                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" marginTop="3%">Añadir Evidencia (subir imagen)</Text>
                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" marginTop="3%">(Imagen1)  (Imagen2)  (Imagen3)</Text>
                <Divider my="2" marginTop="5%" _light={{bg:"tema.2"}} _dark={{bg: "tema.3"}} />
                <Button onPress={() => setIsOpen2(!Send)} marginTop="6%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>Enviar
                    <AlertDialog isOpen={Send} onClose={CloseS}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseS}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">¿Esta seguro de enviar la Información?</Text>
                                <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={() => setIsOpen3(!Confirm)}>Confirmar
                                        <AlertDialog isOpen={Confirm} onClose={CloseC}>
                                            <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                                                <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                                    <TouchableOpacity onPress={CloseS}>
                                                        <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                                    </TouchableOpacity>
                                                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">¡Información enviada correctamente!</Text>
                                                    <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseS}>Aceptar</Button>
                                                </AlertDialog.Body>
                                            </AlertDialog.Content>
                                        </AlertDialog>
                                    </Button>
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseS}>Cancelar</Button>
                                </Button.Group>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </Button>
                <Button marginTop="3%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>Cancelar</Button>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menworord")}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen(!Info)}>
                    <Image size="10" source={require('../assets/S1B.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="info" />
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Nombre del documento:</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Formato para Solicitud de Mantenimiento Correctivo.</Text> {"\t"}
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Referencia de la Norma</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">ISO 9001:2015</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">6.1, 7.1, 7.2, 7.4, 7.5.1, 8.1</Text> {"\t"}
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Código:</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">ITA-AD-PO-001-02</Text>
                                <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseI}>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Aceptar</Text>
                                </Button>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                    <Image size="10" source={require('../assets/SE2B.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="settings" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="exit" />
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

export default ForWorOrd;