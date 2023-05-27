import React, { useState } from "react";
import { VStack, Text, Image, Box, HStack, AlertDialog, Button, Input,Heading } from "native-base";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { View, Modal, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

function VieWorOrdApr({ navigation, route }) {
    /* recibe los parametros del id del user y del personal data */
    const { personaldata_id } = route.params;
    console.log('View Work order Aproved Released')
    console.log('PersonalData ID:', personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    //Estados para abrir y cerrar alerts
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    //Estados para seleccionar fecha
    const todayS = new Date();
    const startDateS = getFormatedDate(todayS.setDate(todayS.getDate() + 1), 'DD/MM/YYYY')

    const [openS, setOpenS] = useState(false); //abrir y cerrar modal
    const [dateS, setDateS] = useState('Seleccionar'); //variable de fecha
    const [textS, setTextS] = useState('Seleccionar');

    function handleOnPress() {
        setOpenS(!openS);
    }

    function handleChange(propDate) {
        setDateS(propDate)
        setTextS(dateS)
    }

    const todayM = new Date();
    const startDateM = getFormatedDate(todayM.setDate(todayM.getDate() + 1), 'DD/MM/YYYY')

    const [openM, setOpenM] = useState(false); //abrir y cerrar modal
    const [dateM, setDateM] = useState('Seleccionar'); //variable de fecha
    const [textM, setTextM] = useState('Seleccionar');

    function handleOnPressM() {
        setOpenM(!openM);
    }

    function handleChangeM(propDate) {
        setDateM(propDate)
        setTextM(dateM)
    }

    //Estados para cargar imagen
    const [galleryPhoto, setGalleryPhoto] = useState();

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri)
    }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Órden de trabajo de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">

                <View>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Fecha de solicitud:
                        <TouchableOpacity onPress={handleOnPress}>
                            <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"> {textS}</Text>
                        </TouchableOpacity>
                    </Text>

                    <Modal transparent={true} visible={openS}>
                        <Box height="70%" width="80%" alignSelf="center" marginTop="20%">
                            <DatePicker mode="calendar" minimumDate={startDateS} selected={dateS} onDateChange={handleChange} />
                            <Button _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                                <TouchableOpacity onPress={handleOnPress}>
                                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" alignSelf="flex-end">Cerrar</Text>
                                </TouchableOpacity>
                            </Button>
                        </Box>
                    </Modal>
                </View>

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Área solicitante: </Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" height="6%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Nombre solicitante: </Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" height="6%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Descripción:</Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" height="8%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Evidencia:</Text>
                <HStack space="4" alignSelf="center" marginTop="3%">
                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />
                </HStack>

                <View>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Fecha de mantenimiento:
                        <TouchableOpacity onPress={handleOnPressM}>
                            <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"> {textM}</Text>
                        </TouchableOpacity>
                    </Text>

                    <Modal transparent={true} visible={openM}>
                        <Box height="70%" width="80%" alignSelf="center" marginTop="20%">
                            <DatePicker mode="calendar" minimumDate={startDateM} selected={dateM} onDateChange={handleChangeM} />
                            <Button _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                                <TouchableOpacity onPress={handleOnPressM}>
                                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" alignSelf="flex-end">Cerrar</Text>
                                </TouchableOpacity>
                            </Button>
                        </Box>
                    </Modal>
                </View>

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Trabajo realizado:</Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" height="8%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" fontWeight="bold">Evidencia de trabajo:</Text>
                <HStack space="4" alignSelf="center" marginTop="3%">
                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{ uri: galleryPhoto }} alt="Image gallery" />
                </HStack>

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%" textAlign="center" fontWeight="bold">Estatus: <Text color="orange.400">LIBERADA</Text></Text>

            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menworord",{ personaldata_id: personaldata_id, id: id })}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="profile" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("settings",{ personaldata_id: personaldata_id, id: id })}>
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

export default VieWorOrdApr;