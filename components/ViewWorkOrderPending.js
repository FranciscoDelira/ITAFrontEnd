import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";

function VieWorOrdPen({ navigation, route }){

    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
    console.log('View Work order pending')
    console.log('PersonalData ID:', personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);    
    

    return(
        <VStack height="100%" width="100%" space={4} _dark={{bg:"tema.3"}} _light={{bg:"tema.2"}}>
            <Heading _dark={{color: "tema.2"}} _light={{color: "tema.3"}} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" marginTop={"10%"} paddingTop="10%">Orden de Trabajo Pendiente</Heading>

            <Box height="65%" w="85%" alignSelf="center">
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" marginTop="3%" bold>Fecha Solicitud:</Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" marginTop="3%" bold>Departamento: </Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" marginTop="3%" bold>Area Solicitante: </Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" marginTop="3%" bold >Nombre del Solicitante: </Text>
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} fontSize="xl" marginTop="3%" bold>Descripcion: </Text>
                <TextArea marginTop="2%" alignItems={'center'} justifyContent={'center'} _dark={{color: "tema.2", borderColor:"tema.2"}} _light={{color: "tema.3", borderColor:"tema.2"}} fontSize="md"></TextArea>            
                <Text _dark={{color: "tema.2"}} _light={{color: "tema.3"}} marginTop="3%" fontSize="xl" bold>Evidencia: </Text>
                <HStack space="4" alignSelf="center" marginTop="3%">
                    <Image size="12" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    <Image size="12" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    <Image size="12" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                </HStack>
                
                <Button alignSelf={'center'} marginTop="5%" _pressed={{ bg: 'tema.6' }} width="40%" borderRadius={"20"} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("forworord")}>
                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Terminar Orden</Text>
                </Button>
            </Box>

            <HStack height="12%" margin={0} alignItems="center" alignSelf="center" space="10">
               
                 <TouchableOpacity onPress={() => navigation.navigate("menworord",{ personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="home" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings",{ personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/SE2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="settings" />
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

export default VieWorOrdPen;