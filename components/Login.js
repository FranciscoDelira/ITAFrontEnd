import React from "react";
import { Text, Image, FormControl, Input, Button, VStack } from "native-base";

function Login({ navigation }) {

  return (
    <VStack width="100%" height="100%" _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignItems="center">

      <Image width="61.2%" height="32%" marginTop="18%" source={require('../assets/TNM1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TecLogo" />

      <FormControl width="70%" height="18%" marginTop="10%">
        <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="xl" height="50%" _focus={{ bg: "tema.6", borderColor: "tema.1" }} borderRadius={0} borderTopLeftRadius={20} borderTopRightRadius={20} placeholder="Correo Institucional" />
        <Input _dark={{ bg: "tema.2", color: "tema.3", placeholderTextColor: "tema.3" }} _light={{ bg: "tema.3", color: "tema.2", placeholderTextColor: "tema.2" }} borderColor="tema.1" fontSize="xl" height="50%" _focus={{ bg: "tema.6", borderColor: "tema.1" }} borderRadius={0} borderBottomLeftRadius={20} borderBottomRightRadius={20} placeholder="Contraseña" />
      </FormControl>

      <VStack width="100%" height="25%" alignItems="center" >

        <Button width="60%" borderRadius={"10"} marginTop="8%" _pressed={{ bg: 'tema.6' }} _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("maintenance")}>
          <Text fontSize="xl" _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Iniciar Sesión</Text>
        </Button>

        <Text alignSelf="flex-end" marginTop="8%" marginRight="3%" fontSize="xs" underline opacity="50" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>¿Has Olvidado Tu Contraseña?</Text>

        <Text alignSelf="center" marginTop="30%" opacity="20" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>FROM  ITA</Text>

      </VStack>

    </VStack>
  );
}

export default Login;
