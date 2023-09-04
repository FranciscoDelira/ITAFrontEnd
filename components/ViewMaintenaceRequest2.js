import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";

function VieMaiReq2({navigation, route}) {
    const { personaldata_id } = route.params;
    console.log('PersonaData ID:', personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);
    const { requestId } = route.params;
    console.log('Request ID:', requestId);

    const[requestMaintenance, setRequestMaintenance] = useState(null);
    const [personalData, setPersonalData] = useState(null);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Release, setIsOpen2] = React.useState(false);
    const CloseR = () => setIsOpen2(false);

    const [ReleaseC, setIsOpen3] = React.useState(false);
    const CloseC = () => setIsOpen3(false);

    useEffect(() => {
        //Función para obtener los datos de la solicitud
        const getMaintenanceReq = async () => {
            try{
                const response = await fetch(`http://192.168./ITABackEnd/public/api/showCombinedData/${requestId}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                  });
                const data = await response.json();
                setRequestMaintenance(data);
                console.log(data);
            }catch (error) {
                console.log(error);
            }
        };

        getMaintenanceReq();
    }, [requestId]);

    useEffect(() => {
        // Función para obtener los datos del personaldata_id
        const getPersonalData = async () => {
          try {
            const response = await fetch(`http://192.168./ITABackEnd/public/api/showCombinedData/${personaldata_id}`);
            const data = await response.json();
            setPersonalData(data); // Actualiza el estado con los datos obtenidos
          } catch (error) {
            console.log(error);
          }
        };
    
        getPersonalData(); // Llama a la función para obtener los datos
      }, [personaldata_id]);

      const liberarSolicitud = async () => {
        console.log("Liberar button pressed");
        try {
            const response = await fetch(`http://192.168./ITABackEnd/public/api/maintenance-request/update-status/${requestId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status:'Liberada' //Cambio de estado
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
      };

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Estado de Solicitud de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">
                
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} alignSelf="flex-end" fontSize="md"><Text fontSize={'xl'} bold>Folio:</Text>{requestMaintenance?.id}</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%"> <Text bold fontSize={'xl'}>Fecha:</Text> {requestMaintenance?.requestDate}</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Descripción: </Text>
                <TextArea _dark={{ color: "tema.2", borderColor: "tema.2" }} _light={{ color: "tema.3", borderColor: "tema.2" }} fontSize="md">{requestMaintenance?.requestDescription}</TextArea>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Evidencia: </Text>
               
                <HStack space={4} marginTop="3%" justifyContent={"center"}>
                    {requestMaintenance?.MR_Evidence1 && (
                <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.MR_Evidence1}`,
                            }}
                            alt="image1"
                            size="md"
                        />
                    )}

                    {requestMaintenance?.MR_Evidence2 && (
                        <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.MR_Evidence2}`,
                          }}
                            alt="image2"
                            size="md"
                        />
                    )}

                    {requestMaintenance?.MR_Evidence3 && (
                        <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.MR_Evidence3}`,
                          }}
                            alt="image3"
                            size="md"
                        />
                    )}
                </HStack>
                
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Asignado a: </Text>{personalData?.name} {personalData?.lastname}</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Fecha de Realizacion: </Text>{requestMaintenance?.maintenanceDate}</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"><Text bold fontSize={'xl'}>Trabajo Realizado: </Text>{requestMaintenance?.jobDescription}</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="xl" bold>Evidencia de Trabajo: </Text>
                
                <HStack space={4} marginTop="3%" justifyContent={"center"}>
                {requestMaintenance?.WO_Evidence1 && (
                        <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.WO_Evidence1}`,
                          }}
                            alt="image1"
                            size="md"
                        />
                    )}

                    {requestMaintenance?.WO_Evidence2 && (
                        <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.WO_Evidence2}`,
                          }}
                            alt="image2"
                            size="md"
                        />
                    )}

                    {requestMaintenance?.WO_Evidence3 && (
                        <Image
                        source={{
                            uri: `http://192.168./ITABackEnd/storage/app/${requestMaintenance?.WO_Evidence3}`,
                          }}
                            alt="image3"
                            size="md"
                        />
                    )}
                </HStack>

                <Text alignSelf={'center'} color={'tema.8'} fontSize="md"><Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} bold fontSize={'xl'}>Estatus: </Text> {requestMaintenance?.status.toUpperCase()}</Text>
                
                <HStack justifyContent={'center'}>

                    <Button _pressed={{ bg: 'tema.6' }} width="40%" borderRadius={"20"} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => setIsOpen2(!Release)}>
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Liberar</Text>
                        <AlertDialog isOpen={Release} onClose={CloseR}>
                            <AlertDialog.Content _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
                                <AlertDialog.Body _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignSelf="center">
                                    <TouchableOpacity onPress={CloseR}>
                                        <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                    </TouchableOpacity>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" textAlign="center">¿Esta seguro de liberar la solicitud de mantenimiento?</Text>
                                    <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                        <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => {liberarSolicitud();/*Llamar a la función*/ setIsOpen3(!ReleaseC);/*Cambiar el estado de ReleaseC*/}}>
                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Confirmar</Text>
                                            <AlertDialog isOpen={ReleaseC} onClose={CloseC}>
                                                <AlertDialog.Content _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
                                                    <AlertDialog.Body _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignSelf="center">
                                                        <TouchableOpacity onPress={CloseC}>
                                                            <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                                        </TouchableOpacity>
                                                        <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" textAlign="center">¡Solicitud Liberada Correctamente!</Text>
                                                        <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("menmaiact", { personaldata_id: personaldata_id, id: id })}>
                                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Aceptar</Text>
                                                        </Button>
                                                    </AlertDialog.Body>
                                                </AlertDialog.Content>
                                            </AlertDialog>
                                        </Button>
                                        <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={CloseR}>
                                            <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
                                        </Button>
                                    </Button.Group>
                                </AlertDialog.Body>
                            </AlertDialog.Content>
                        </AlertDialog>
                    </Button>

                    <Button _pressed={{ bg: 'tema.6' }} width="40%" borderRadius={"20"} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("menmaiact")}>
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Cancelar</Text>
                    </Button>

                </HStack>

            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">
                
                <TouchableOpacity onPress={() => navigation.navigate("menmaireq")}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                    <Image size="10" source={require('../assets/P1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
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

export default VieMaiReq2;