import React, { useState } from "react";
import { VStack, Text, Heading, Image, Box, HStack, AlertDialog, Button, Input } from "native-base";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { View, Modal, TouchableOpacity } from "react-native";

function ForWorOrd({ navigation, route }){
    //Estados para abrir y cerrar alerts
    const [Info, setIsOpen] = React.useState(false);
    const CloseI = () => setIsOpen(false);

    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE = () => setIsOpen1(false);

    const [Send, setIsOpen2] = React.useState(false);
    const CloseS = () => setIsOpen2(false);

    const [Confirm, setIsOpen3] = React.useState(false);
    const CloseC = () => setIsOpen3(false);

    //Estados para seleccionar fecha
    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY')

    const [openM, setOpenM] = useState(false); //abrir y cerrar modal
    const [date, setDate] = useState('Seleccionar'); //variable de fecha
    const [text, setText] = useState('Seleccionar');

    function handleOnPress(){
        setOpenM(!openM);
    }

    function handleChange (propDate){
        setDate(propDate)
        setText(date)
    }

    //Estados para cargar imagen
    const [galleryPhoto, setGalleryPhoto] = useState();

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    }

    const openGallery = async() => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri)
    }
    
    return (
        <VStack height="100%" width="100%" space={4} _dark={{bg:"tema.3"}} _light={{bg:"tema.2"}}>
            <Heading _dark={{color: "tema.2"}} _light={{color: "tema.3"}} textAlign="center" height="15%" alignSelf="center" fontSize="3xl" paddingTop="10%">Órden de trabajo de Mantenimiento</Heading>

            <Box height="70%" w="90%" alignSelf="center">
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} alignSelf="flex-end" fontSize="md">Folio: 001</Text>

                <View>
                    <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Fecha de mantenimiento: 
                        <TouchableOpacity onPress={handleOnPress}>
                            <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md"> {text}</Text>
                        </TouchableOpacity>
                    </Text>
                            
                    <Modal transparent={true} visible={openM}>
                        <Box height="70%" width="80%" alignSelf="center" marginTop="20%">
                            <DatePicker mode="calendar" minimumDate={startDate} selected={date} onDateChange={handleChange}/>
                            <Button _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                                <TouchableOpacity onPress={handleOnPress}>
                                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md" alignSelf="flex-end">Cerrar</Text>
                                </TouchableOpacity>
                            </Button>
                        </Box>
                    </Modal>
                </View>

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Trabajo realizado:</Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" height="15%" />

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="md" marginTop="3%">Añadir Evidencia:</Text>
                
                <HStack space="4" alignSelf="center" marginTop="3%">
                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{uri: galleryPhoto}} alt="Image gallery"/>

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{uri: galleryPhoto}} alt="Image gallery"/>

                    <Button h="20" w="20" borderWidth={0.5} _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={openGallery}>
                        <Image size="10" source={require('../assets/Image.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="Add image" />
                    </Button>
                    <Image alignSelf="center" source={{uri: galleryPhoto}} alt="Image gallery"/>
                </HStack>

                <Button onPress={() => setIsOpen2(!Send)} marginTop="10%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                    <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">Enviar</Text>
                    <AlertDialog isOpen={Send} onClose={CloseS}>
                        <AlertDialog.Content _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}}>
                            <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseS}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity> 
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">¿Esta seguro de enviar la Información?</Text>
                                <Button.Group marginTop="10%" alignSelf={"flex-end"} >
                                    <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} onPress={() => setIsOpen3(!Confirm)}>Confirmar
                                    <AlertDialog isOpen={Confirm} onClose={CloseC}>
                                            <AlertDialog.Content _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>
                                                <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                                    <TouchableOpacity onPress={CloseS}>
                                                        <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="close" />
                                                    </TouchableOpacity> 
                                                    <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">¡Información enviada correctamente!</Text> 
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

                <Button marginTop="3%" rounded="lg" w="40%" alignSelf="center" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                    <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">Cancelar</Text>
                </Button>

            </Box>

            <HStack height="10%" alignItems="center" alignSelf="center" space="10">

                <TouchableOpacity onPress={() => navigation.navigate("menworord")}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="home" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsOpen(!Info)}>
                    <Image size="12" source={require('../assets/S1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="info" />
                    <AlertDialog isOpen={Info} onClose={CloseI}>
                        <AlertDialog.Content _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}>
                            <AlertDialog.Body _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} alignSelf="center">
                                <TouchableOpacity onPress={CloseI}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Nombre del documento:</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Formato para orden de Trabajo de mantenimiento.</Text>
                                <Text></Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Referencia de la Norma</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">ISO 9001:2015</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">6.1, 7.1, 7.2, 7.4, 7.5.1, 8.1</Text>
                                <Text></Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">Código:</Text>
                                <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} fontSize="md">ITA-AD-PO-001-04</Text>
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

export default ForWorOrd;