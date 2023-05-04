import React from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, Button, Input, AlertDialog} from "native-base";
import { TouchableOpacity } from "react-native";

function Password({ navigation }) {

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading width="100%" height="20%" textAlign="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" marginTop="10%" paddingTop="10%">Cambio de contraseña</Heading>

            <Avatar height="15%" width="30%" alignSelf="center" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }}>
            </Avatar>

            <Box height="45%" alignSelf="center" p="2">

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Contraseña actual: </Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} p="2">*******************</Text>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Nueva contraseña: </Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" _focus={{ bg: "tema.6", borderColor: "tema.1" }} placeholder="Escriba su nueva contraseña" p="2" />
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Confirmar contraseña: </Text>
                <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="md" _focus={{ bg: "tema.6", borderColor: "tema.1" }} placeholder="Confirme su nueva contraseña" p="2" />
                
                <Button.Group marginTop={"5%"}>
                <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("settings")}>
                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Confirmar</Text>
                </Button>
                <Button borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("settings")}>
                    <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
                </Button>
                </Button.Group>

            </Box>
           
        </VStack>
    )
}
export default Password; 
