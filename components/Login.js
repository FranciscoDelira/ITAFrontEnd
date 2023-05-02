import React from "react";
import { useState } from 'react';
import axios from "axios";
import { Text, Image, FormControl, Input, Button, VStack } from "native-base";
import { Alert } from "react-native";

function Login({ navigation }) {
  const [formReact, setFormReact] = React.useState({})
  const [isLoading, setIsLoading] = useState(false);

  const alertEmailincorrect = () => {
    Alert.alert('Credenciales inválidas', 
    'Por favor, verifique su correo y contraseña');
  }


  const onSubmit = async () => {
    const formDataforRequest = new FormData()
    formDataforRequest.append('email', formReact.email)
    formDataforRequest.append('password', formReact.password)

    try {
      const response = await axios.post(
        'http://192.168.100.96/ITABackEnd/public/api/login',
        formDataforRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"
          },
          transformRequest: formData => formDataforRequest,
        }
      )


      //Valida si el usuario esta registrado
      if (response.data.status === 200) {
        //valida el rol del usuario ingresado
        if (response.data.user.role === 'Jefe Departamento') {
          console.log('navigation maintenance request');
          navigation.navigate("maintenance");
        } else if (response.data.user.role === 'Mantenimiento') {
          console.log('navigation work order');
          navigation.navigate("maintenance");
        }
      }
    } catch (error) {
      alertEmailincorrect();
    }
  }

  return (
    <VStack width="100%" height="100%" _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignItems="center">

      <Image width="61.2%" height="32%" marginTop="18%" source={require('../assets/TNM1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TecLogo" />

      <FormControl width="70%" height="18%" marginTop="10%">
        <Input onChangeText={value => setFormReact({ ...formReact, email: value })} type="email" _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="xl" height="50%" _focus={{ bg: "tema.6", borderColor: "tema.1" }} borderRadius={0} borderTopLeftRadius={20} borderTopRightRadius={20} placeholder="Correo Institucional" />
        <Input onChangeText={value => setFormReact({ ...formReact, password: value })} type="password" _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="xl" height="50%" _focus={{ bg: "tema.6", borderColor: "tema.1" }} borderRadius={0} borderBottomLeftRadius={20} borderBottomRightRadius={20} placeholder="Contraseña" />
      </FormControl>

      <VStack width="100%" height="25%" alignItems="center" >

        <Button width="60%" borderRadius={"10"} marginTop="8%" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }}
          onPress={onSubmit} isLoading={isLoading}>
          <Text fontSize="xl" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Iniciar Sesión</Text>
        </Button>

        <Text alignSelf="flex-end" marginTop="8%" marginRight="3%" fontSize="xs" underline opacity="50" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>¿Has Olvidado Tu Contraseña?</Text>

        <Text alignSelf="center" marginTop="30%" opacity="20" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>FROM  ITA</Text>

      </VStack>

    </VStack>
  );
}

export default Login;