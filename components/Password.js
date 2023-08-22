import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Heading, Image, HStack, Avatar, Button, Input, AlertDialog } from "native-base";
import axios from "axios";

function Password({ navigation, route }) {
    const [formReact, setFormReact] = React.useState({ password: "" });
    const { personaldata_id } = route.params;
    console.log('Password')
    console.log('PersonalData ID:', personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    const editUser = async () => {
        const formDataforRequest = new FormData()
        formDataforRequest.append('password', formReact.password)

        try {
            console.log('entra al try');
            const response = await axios.post(
                `http://192.168./ITABackEnd/public/api/user_update/${id}`,
                formDataforRequest,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-Control-Allow-Origin": "*"
                    },
                    transformRequest: formData => formDataforRequest,
                }
            );
        } catch (error) {
            console.log('catch' , error);
        }
    }

    return (
        <VStack height="100%" width="100%" space={4} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }}>

            <Heading width="100%" height="20%" textAlign="center" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="4xl" marginTop="10%" paddingTop="10%">Cambio de contraseña</Heading>

            <Avatar height="15%" width="30%" alignSelf="center" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }}>
            </Avatar>

            <Box height="45%" alignSelf="center" p="2">

                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Nueva contraseña: </Text>
                <Input value={formReact.password} onChangeText={(value) => setFormReact({ ...formReact, password: value })} placeholder="Escriba su nueva contraseña:" borderRadius={"10px"} _dark={{ backgroundColor: "tema.3", borderColor: "tema.2", placeholderTextColor: "tema.2" }} _light={{ backgroundColor: "tema.2", borderColor: "tema.3", placeholderTextColor: "tema.3" }} ></Input>
                <Text _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }} fontSize="3xl" >Confirmar contraseña: </Text>
                <Input placeholder="Confirme su nueva contraseña:" borderRadius={"10px"} _dark={{ backgroundColor: "tema.3", borderColor: "tema.2", placeholderTextColor: "tema.2" }} _light={{ backgroundColor: "tema.2", borderColor: "tema.3", placeholderTextColor: "tema.3" }} ></Input>

                <HStack marginTop={"10%"} height={"13%"} alignSelf={'center'}>
                    <Button width={"40%"} borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={editUser}>
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Confirmar</Text>
                    </Button>
                    <Button marginLeft={"10px"} width={"40%"} size={'lg'} borderRadius="10" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("settings", { personaldata_id: personaldata_id, id: id })}>
                        <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }}>Cancelar</Text>
                    </Button>
                </HStack>

            </Box>

        </VStack>
    )
}
export default Password;
