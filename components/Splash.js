import React from "react";
import { Text, Box, Image } from "native-base";

function Splash() {

  return (
    <Box style={{ width: "100%", height: "100%" }} _dark={{ bg: "tema.3" }} _light={{ bg: "tema.2" }} bg={"tema.3"} justifyContent='center' alignItems="center">
      
      <Image alignSelf={"center"} justifyContent='center' size="150px" source={require('../assets/TNM1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="TecLogo" />

      <Box position={"absolute"} bottom={0}>
        
        <Text>FROM</Text>
        <Text>ITIC'S</Text>

      </Box>

    </Box>
  );
}

export default Splash;