import React from "react";
import { Text, Box, Image, FormControl, Input, Link, Button, useColorMode, VStack, Center } from "native-base";

function Login({ navigation }) {

  return (
    <VStack width="100%" height="100%" _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} alignItems="center">

      <Image width="61.2%" height="32%"  marginTop="18%" source={require('../assets/TNM1B.png')} alt="TecLogo" />

      <FormControl width="70%" height="18%" marginTop="10%">
        <Input color={"tema.3"} size={"md"} height="50%" _focus={{ backgroundColor: "tema.2" }} borderTopLeftRadius={20} borderTopRightRadius={20} borderColor={"tema.1"} bg={"tema.2"} placeholder="Correo Institucional" />
        <Input color={"tema.3"} size={"md"} height="50%" _focus={{ backgroundColor: "tema.2" }} borderRadius={0} borderBottomLeftRadius={20} borderBottomRightRadius={20} borderColor={"tema.1"} bg={"tema.2"} placeholder="Contraseña" />
      </FormControl>

      <VStack width="100%" height="25%" alignItems="center" > 
        <Button width="150px" borderRadius={"15"}  marginTop="15%" _dark={{ bg: "tema.2" }} _light={{ bg: "tema.3" }} onPress={() => navigation.navigate("maintenance")}>
          <Text _dark={{ color: "tema.3" }} _light={{ color: "tema.2" }} >Iniciar Sesión</Text>
        </Button>

        <Text  alignSelf="flex-end" marginTop="5%" marginRight="3%" fontSize="xs" underline opacity="50" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>¿Has Olvidado Tu Contraseña?</Text>

        <Text alignSelf="center" marginTop="30%" opacity="20" _dark={{ color: "tema.2" }} _light={{ color: "tema.3" }}>FROM  ITA</Text>

      </VStack>

    </VStack>
  );
}

export default Login;