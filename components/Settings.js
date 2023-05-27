import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, Button, AlertDialog, useColorMode } from "native-base";
import { TouchableOpacity } from "react-native";

function Settings({ navigation, route }) {

    const { personaldata_id } = route.params;
    console.log('Settings')
    console.log('PersonalData ID:',personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    const [personalData, setPersonalData] = useState(null);
    const [user, setUser] = useState(null);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    // Cambio de tema
    const { colorMode, toggleColorMode } = useColorMode();
    //console.log(colorMode)

    useEffect(() => {
        // Función para obtener los datos del personaldata_id
        const getPersonalData = async () => {
            try {
                const response = await fetch(`http://192.168.100.96/ITABackEnd/public/api/personalData_show/${personaldata_id}`);
                const data = await response.json();
                setPersonalData(data); // Actualiza el estado con los datos obtenidos
            } catch (error) {
                console.log(error);
            }
        };

        getPersonalData(); // Llama a la función para obtener los datos
    }, [personaldata_id]);

    useEffect(() => {
        //Función para obtener los datos del usuario
        const getUser = async () => {
            try {
                const response = await fetch(`http://192.168.100.96/ITABackEnd/public/api/user_show/${id}`);
                const data = await response.json();
                setUser(data);//Actualiza el estado con los datos obtenidos
            } catch (error) {
                console.log(error);
            }
        };
        getUser(); //Llama la función para obtener los datos
    }, [id]);


    const validateRole = async () => {
        if (user?.role === 'Jefe Departamento') {
            navigation.navigate("menmaireq", { personaldata_id: personaldata_id, id: id });
        } else if (user?.role === 'Mantenimiento') {
            navigation.navigate("menworord", { personaldata_id: personaldata_id, id: id }, { personaldata_id: personaldata_id, id: id });
        }
    }
    {/* const {colorMode, toggleColorMode} = useColorMode(); */ }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading height="10%" textAlign={"center"} alignSelf="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" marginTop="20%" >Configuración</Heading>

            <Avatar height="12%" width="25%" marginLeft={"5%"} source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }}>
            </Avatar>

            <Box height="53%" width={"95%"} alignSelf="center" p="3"  >
                <HStack alignItems="center" marginBottom="8">
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" >Cambiar contraseña</Text>
                    <Button size="7" borderRadius={10} marginLeft={"30%"} variant="unstyled" _pressed={{ bg: 'tema.6' }} onPress={() => navigation.navigate("password", { personaldata_id: personaldata_id, id: id }, { personaldata_id: personaldata_id, id: id })}>
                        <Image size="6" source={require('../assets/F1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="open" />
                    </Button>
                </HStack>
                <Button onPress={()=>{toggleColorMode();(colorMode)}}>Toogle</Button>
                <VStack space={2.5}>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="sm" >Referencia a la Norma ISO 9001:2015 6.1, 7.1, 7.2, 7.4, 7.5.1, 8.1</Text>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="sm" >“ITA-AD-PO-001-02 Formato para solicitud de Mantenimiento Correctivo”</Text>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="sm" >“ITA-AD-PO-001-04 Formato para Orden de Trabajo de Mantenimiento”</Text>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="sm" marginTop="10">Desarrollado por SOLUTEC</Text>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="sm" >Versión 1.10</Text>
                </VStack> </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6">
                <TouchableOpacity onPress={validateRole}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="home" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("profile", {personaldata_id: personaldata_id, id: id})}>
                    <Image size="10" source={require('../assets/U1A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2A.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
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

        </VStack>
    )
}
export default Settings;