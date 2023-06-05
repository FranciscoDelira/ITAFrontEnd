import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, Select, CheckIcon, Input } from "native-base";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { View, Modal, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';


function ForMaiReq({ navigation }) {

    //Estados para controlar la visibilidad de la alerta y texto de los campos
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");

    //Función para limpiar los campos
    const handleClear = () => {
        setFormReact({
            personaldata_id: personaldata_id,
            status: "PENDIENTE",
            department: '',
            requestDate: '',
            requestDescription: '',
            evidence1: '',
            evidence2: '',
            evidence3: '',
        });
    };

    const route = useRoute();
    const personaldata_id = route.params?.personaldata_id;
    console.log('PersonalData ID:', personaldata_id);
    const id = route.params?.id;
    console.log('User ID:', id);

    const [formReact, setFormReact] = useState({
        personaldata_id: personaldata_id,
        status: "PENDIENTE",
        department: '',
        requestDate: '',
        requestDescription: '',
        evidence1: '',
        evidence2: '',
        evidence3: '',
    });

    //Estados para abrir y cerrar los alert
    const [Info, setIsOpen] = React.useState(false);
    const CloseI = () => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Send, setIsOpen2] = React.useState(false);
    const CloseS = () => setIsOpen2(false);

    //Estados para seleccionar fecha
    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY');

    const [openM, setOpenM] = useState(false); //abrir y cerrar modal
    const [date, setDate] = useState('Seleccionar'); //variable de fecha
    const [text, setText] = useState('Seleccionar');

    //Estados para cargar imagen
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    // Suprimir los warnings en la pantalla
    console.warn = () => { };

    const pickImage1 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled && result.assets.length > 0) {
            const selectedImage = result.assets[0];
            const imagePath = selectedImage.uri;
            setImage1(imagePath);
            setFormReact((prevFormReact) => ({
                ...prevFormReact,
                evidence1: imagePath,
            }));
            console.log('Form React:', formReact);
        }
    };

    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled && result.assets.length > 0) {
            const selectedImage = result.assets[0];
            const imagePath = selectedImage.uri;
            setImage2(imagePath);
            setFormReact((prevFormReact) => ({
                ...prevFormReact,
                evidence2: imagePath,
            }));
            console.log('Form React:', formReact);
        }
    };

    const pickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled && result.assets.length > 0) {
            const selectedImage = result.assets[0];
            const imagePath = selectedImage.uri;
            setImage3(imagePath);
            setFormReact((prevFormReact) => ({
                ...prevFormReact,
                evidence3: imagePath,
            }));
            console.log('Form React:', formReact);
        }
    };

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('department', formReact.department);
        formData.append('requestDate', formReact.requestDate);
        formData.append('personaldata_id', formReact.personaldata_id);
        formData.append('requestDescription', formReact.requestDescription);
        formData.append('status', formReact.status);
        // Agregar las rutas de las imágenes en lugar de los objetos de imagen
        formData.append('evidence1', formReact.evidence1 /*|| ''*/ ? { uri: formReact.evidence1, name: 'image1', type: mime.getType(formReact.evidence1) } : '');
        formData.append('evidence2', formReact.evidence2 /*|| ''*/ ? { uri: formReact.evidence2, name: 'image2', type: mime.getType(formReact.evidence2) } : '');
        formData.append('evidence3', formReact.evidence3 /*|| ''*/ ? { uri: formReact.evidence3, name: 'image3', type: mime.getType(formReact.evidence3) } : '');
        console.log(formData);

        try {
            const response = await axios.post(
                'http://192.168.100.167/ITABackEnd/public/api/maintenance_store',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-Control-Allow-Origin": "*"
                    },
                    transformRequest: formData => formData,
                }
            );

            // mostrar la alerta con el mensaje de éxito 
            setAlertText("¡Datos registrados correctamente!");
            setShowAlert(true);

        } catch (error) {
            // Mostrar la alerta con el mensaje de error
            setAlertText("Error al registrar los datos. Por favor, inténtalo de nuevo.");
            setShowAlert(true);

            if (error.response) {
                console.log('Mensaje de error:', error.response.data.message);
            } else {
                console.log('Error sin respuesta:', error.message);
            }
        }
    };

    function handleOnPress() {
        setOpenM(!openM);
    }

    function handleChange(propDate) {
        setDate(propDate);
        setText(date); //Actualizar el texto con el valor de propDate
        setFormReact({ ...formReact, requestDate: propDate }); //Actualizar requestDate en el estado de formReact
    }


    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Solicitud de Mantenimiento Correctivo</Heading>

            <Box height="70%" w="90%" alignSelf="center">

                <View>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Fecha de mantenimiento:
                        <TouchableOpacity onPress={handleOnPress}>
                            <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"> {text}</Text>
                        </TouchableOpacity>
                    </Text>

                    <Modal transparent={true} visible={openM}>
                        <Box height="70%" width="80%" alignSelf="center" marginTop="20%">
                            <DatePicker onDateChange={handleChange} mode="calendar" minimumDate={startDate} selected={date} />
                            <Button _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                                <TouchableOpacity onPress={handleOnPress}>
                                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" alignSelf="flex-end">Cerrar</Text>
                                </TouchableOpacity>
                            </Button>
                        </Box>
                    </Modal>
                </View>

                <Select value={formReact.department} onValueChange={(value) => setFormReact({ ...formReact, department: value })} _dark={{ bg: "tema.2", color: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2" }} minWidth="200" accessibilityLabel="Seleccionar departamento" placeholder="Selecciona departamento" _selectedItem={{
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

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="4%">Descripción: </Text>
                <Input value={formReact.requestDescription} onChangeText={(value) => setFormReact({ ...formReact, requestDescription: value })} _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} marginTop="2%" borderColor="tema.1" fontSize="md" height="15%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Añadir Evidencia:</Text>
                <HStack space="4" alignSelf="center" marginTop="3%">
                    <Button borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={pickImage1}>
                        {/*<Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />*/}
                        {image1 && <Image source={{ uri: image1 }} size="16" alt="Image" />}
                    </Button>
                    <Button borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={pickImage2}>
                        {/*<Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />*/}
                        {image2 && <Image source={{ uri: image2 }} size="16" alt="Image" />}
                    </Button>
                    <Button borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={pickImage3}>
                        {/*<Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />*/}
                        {image3 && <Image source={{ uri: image3 }} size="16" alt="Image" />}
                    </Button>
                </HStack>

                <Button onPress={onSubmit} marginTop="6%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Enviar Solicitud</Text>
                    <AlertDialog isOpen={showAlert} onClose={() => setShowAlert(false)}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseS}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">¡Solicitud enviada correctamente!</Text>
                                <Button marginTop="10%" alignSelf="center" w="90px" borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={() => { handleClear(); navigation.navigate("menmaireq", { personaldata_id: personaldata_id, id: id }) }}>
                                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>Aceptar</Text>
                                </Button>
                            </AlertDialog.Body>
                        </AlertDialog.Content>
                    </AlertDialog>
                </Button>

                <Button marginTop="3%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => { handleClear(); navigation.navigate("menmaireq", { personaldata_id: personaldata_id, id: id }) }}>
                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
                </Button>
            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menmaireq", { personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen(!Info)}>
                    <Image size="10" source={require('../assets/S1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">"Reporta las fallas en la infraestructura dentro del ITA.</Text>  {"\t"}
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" textAlign="center">Puedes consultar las solicitudes de mantenimiento activas, así como el historial de estas".</Text>
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

export default ForMaiReq;