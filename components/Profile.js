import React from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, AlertDialog, Button} from "native-base";
import { TouchableOpacity } from "react-native";

function Profile ({navigation}) {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE =() => setIsOpen1(false);

    return (
        <VStack height="100%" width="100%" space={4} _dark={{bg:"tema.3"}} _light={{bg:"tema.2"}}>
           
            <Heading height="20%" alignSelf="center" _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="4xl" marginTop="10%" paddingTop="10%">Perfil de Usuario</Heading>
           
            <Avatar height="20%" width="40%" alignSelf="center" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg" }}>
            </Avatar>

            <Box height="40%" alignSelf="center" p="2">
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="3xl" >Nombre: </Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} p="2">Francisco de Jesus De lira Martinez</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="3xl" >Correo: </Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} p="2">19151704@aguascalientes.tecnm.mx</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="3xl" >Area: </Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} p="2">Departamento de TIC's</Text>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6">
              
           *    <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="maintenance" />
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
export default Profile; 
