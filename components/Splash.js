import React from "react";
import { Text, Box, Image } from "native-base";



function Splash () {
  
  return (
    <Box style={{width:"100%", height:"100%"}} bg={"tema.3"} justifyContent='center' alignItems="center">
       <Image alignSelf={"center"} justifyContent='center' size="150px" source={require('../assets/TNM1B.png')} alt="TecLogo"/>
       <Box position={"absolute"} bottom={0}>
       <Text color={"tema.2"}>FROM</Text>
       <Text color={"tema.2"}>ITIC'S</Text>
      </Box>
    </Box>
  );
}

export default Splash;