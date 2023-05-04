import React from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, Select, CheckIcon, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";

function ForMaiReq({ navigation }){
    const [Info, setIsOpen] = React.useState(false);
    const CloseI = () => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Send, setIsOpen2] = React.useState(false);
    const CloseS = () => setIsOpen2(false);

    return(
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>
            
            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Solicitud de Mantenimiento Correctivo</Heading>

            <Box height="70%" w="90%" alignSelf="center">
            
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} alignSelf="flex-end" fontSize="md">Folio: 001</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Fecha: <Date></Date></Text>
            
                <Select minWidth="200" accessibilityLabel="Selecciona departamento" placeholder="Selecciona departamento" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }} mt={1} marginTop="3%">
                    <Select.Item label="Dirección" value="direccion" />
                    <Select.Item label="Subdirección Académica" value="subdireccion" />
                    <Select.Item label="División de Estudios Profesionales" value="estProfesional" />
                    <Select.Item label="División de Estudios de Posgrado" value="posgrado" />
                    <Select.Item label="Ingeniería Química y Bioquímica" value="quimica" />
                    <Select.Item label="Económico Administrativo" value="economico" />
                    <Select.Item label="Sistemas y Computación" value="sistemas" />
                    <Select.Item label="Ingeniería Industrial" value="industrial" />
                    <Select.Item label="Ingeniería de Metal-Mecánica" value="mecanica" />
                    <Select.Item label="Ingeniería Eléctrica-Electrónica" value="electrica" />
                    <Select.Item label="Coordinación de Educación a Distancia" value="distancia" />
                    <Select.Item label="Desarrollo Académico" value="desAcademico" />
                    <Select.Item label="Ciencias Básicas" value="ciencias" />
                    <Select.Item label="Coordinación de Lenguas Extranjeras" value="idiomas" />
                    <Select.Item label="Subdirección de Servicios Administrativos" value="subAdministrativos" />
                    <Select.Item label="Recursos Humanos" value="recursosHumanos" />
                    <Select.Item label="Recursos Materiales" value="recursosMateriales" />
                    <Select.Item label="Recursos Materiales" value="recursosMateriales" />
                    <Select.Item label="Mantenimiento" value="mantenimiento" />
                    <Select.Item label="Recursos Financieros" value="recursosFinancieros" />
                    <Select.Item label="Centro de Cómputo" value="cc" />
                    <Select.Item label="Subdirección de Planeación y Vinculación" value="subVinculacion" />
                    <Select.Item label="Servicios Escolares" value="servEscolares" />
                    <Select.Item label="Gestión Tecnológica y Vinculación" value="gestionTecnologica" />
                    <Select.Item label="Planeación, Programación y Presupuestación" value="planeacion" />
                    <Select.Item label="Comunicación y Difusión" value="difusion" />
                    <Select.Item label="Actividades Extraescolares" value="extraescolares" />
                    <Select.Item label="Centro de Información" value="centroInfo" />
                </Select>
            
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Firma del Solicitante (subir imagen)</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Descripción</Text>
                <TextArea h={40}  _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}></TextArea>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Añadir Evidencia (subir imagen)</Text>
                
                <Button onPress={() => setIsOpen2(!Send)} marginTop="6%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Enviar Solicitud
                    <AlertDialog isOpen={Send} onClose={CloseS}>
                        <AlertDialog.Content _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>
                            <AlertDialog.Body _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseS}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity> 
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">¡Solicitud enviada correctamente!</Text>
                                <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={CloseS}>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Aceptar</Text>
                                </Button>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </Button>
                
                <Button marginTop="3%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Cancelar</Button>
            
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menmainreq")}>
                    <Image size="10" source={require('../assets/U1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen(!Info)}>
                    <Image size="10" source={require('../assets/S1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}}>
                            <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity> 
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">"Reporta las fallas en la infraestructura dentro del ITA.</Text>  {"\t"}
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

export default ForMaiReq;