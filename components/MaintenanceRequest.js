import React from "react";
import { Box, Button, VStack, Heading, Image, HStack, AlertDialog } from "native-base";
import { TouchableOpacity } from "react-native";

function MaintenanceRequest({navigation}){ 

    const [Info, setIsOpen] = React.useState(false);
    const CloseI =() => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE =() => setIsOpen1(false);

    return(        
        <VStack height="100%" width="100%" space={4} bg="tema.2">   
            
            <Image alignSelf="center" width="100%" height="10%" marginTop="10%" source={require('../assets/TNM3A.png')} alt="TECNM"/>
            
            <Heading height="15%" alignSelf="center" color="tema.3" fontSize="4xl" paddingTop="5%">Solicitudes de mantenimiento</Heading>
            
            <Box height="55%" w="90%" alignSelf="center" >

                <Button bg="tema.3" borderRadius="xl" h="32" _text={{
                    fontSize: "3xl"
                    }}>Nueva solicitud</Button>

                <Button bg="tema.3" borderRadius="xl" h="32" marginTop="5%" _text={{
                    fontSize: "3xl"
                    }}>Solicitudes activas</Button>

                <Button bg="tema.3" borderRadius="xl" h="32" marginTop="5%" _text={{
                    fontSize: "3xl"
                    }}>Historial de solicitudes</Button>

            </Box>
            
            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <Image size="10" source={require('../assets/U1A.png')} alt="profile" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setIsOpen(!Info)}>
                    <Image size="10" source={require('../assets/S1A.png')} alt="info"/>
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content bg="white">
                            <AlertDialog.Body bg="white" alignSelf="center" _text={{
                                color: "blue.900",
                                fontSize: "md",
                                textAlign: "center"}}>
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} alt="close"/>
                                </TouchableOpacity>
                                "Reporta las fallas en la infraestructura dentro del ITA. {"\t"}
                                Puedes consultar las solicitudes de mantenimiento activas, así como el historial de estas".
                                <Button marginTop="10%" alignSelf="center" w="90px" colorScheme="darkBlue" borderRadius="xl" onPress={CloseI}>
                                    Aceptar
                                </Button>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("password")}>
                    <Image size="10" source={require('../assets/P1A.png')} alt="password" />
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=>setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2A.png')} alt="exit"/>
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

export default MaintenanceRequest;