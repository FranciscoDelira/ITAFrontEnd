import React from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, AlertDialog, Button} from "native-base";
import { TouchableOpacity } from "react-native";

function Profile ({navigation}) {

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE =() => setIsOpen1(false);

    return (
        <VStack height="100%" width="100%" space={4} bg="tema.3">
           
            <Heading height="20%" alignSelf="center" color="tema.2" fontSize="4xl" marginTop="10%" paddingTop="10%">Perfil de Usuario</Heading>
           
            <Avatar height="20%" width="40%" alignSelf="center" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg" }}>
            </Avatar>

            <Box height="40%" alignSelf="center" p="2">
                <Text fontSize="3xl" >Nombre: </Text>
                <Text p="2">Francisco de Jesus De lira Martinez</Text>
                <Text fontSize="3xl" >Correo: </Text>
                <Text p="2">19151704@aguascalientes.tecnm.mx</Text>
                <Text fontSize="3xl" >Area: </Text>
                <Text p="2">Departamento de TIC's</Text>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6">
              
                <TouchableOpacity onPress={() => navigation.navigate("maintenance")}>
                    <Image size="10" source={require('../assets/C1B.png')} alt="maintenance" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("password")}>
                    <Image size="10" source={require('../assets/P1B.png')} alt="password" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} alt="exit"/>
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content bg="white">                            
                            <AlertDialog.Body bg="white" _text={{
                                color: "blue.900",
                                fontSize: "md",
                                textAlign: "center"}}>
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} alt="close"/>
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

        </VStack>
    )
}
export default Profile; 
