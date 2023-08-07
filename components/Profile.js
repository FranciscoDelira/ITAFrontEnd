import React, { useEffect, useState } from "react";
import { Text, VStack, Heading, Image, HStack, Avatar, AlertDialog, Button} from "native-base";
import { TouchableOpacity } from "react-native";



function Profile ({ navigation, route }) {
    const { personaldata_id } = route.params;
    console.log('Profile')
    console.log('PersonalData ID:',personaldata_id);
    const { id } = route.params;
    console.log('User ID:', id);

    const [personalData, setPersonalData] = useState(null);
    const [user, setUser] = useState(null);
    const [Exit, setIsOpen1] = React.useState(false);
    const CloseE =() => setIsOpen1(false);

    

    useEffect(() => {
        // Función para obtener los datos del personaldata_id
        const getPersonalData = async () => {
          try {
            const response = await fetch(`http://192.168./ITABackEnd/public/api/personalData_show/${personaldata_id}`);
            const data = await response.json();
            setPersonalData(data); // Actualiza el estado con los datos obtenidos
          } catch (error) {
            console.log(error);
          }
        };
    
        getPersonalData(); // Llama a la función para obtener los datos
      }, [personaldata_id]);

      useEffect(() => {
        //Función para obtener los datos del usuario
        const getUser = async () => {
            try {
                const response = await fetch(`http://192.168./ITABackEnd/public/api/user_show/${id}`);
                const data = await response.json();
                setUser(data);//Actualiza el estado con los datos obtenidos
            }catch (error) {
                console.log(error);
            }
        };
        getUser(); //Llama la función para obtener los datos
      }, [id]);

      const validateRole = async () => {
        if (user?.role === 'Jefe Departamento') {
            navigation.navigate("menmaireq", {personaldata_id: personaldata_id, id: id});
          } else if (user?.role === 'Mantenimiento') {
            navigation.navigate("menworord", {personaldata_id: personaldata_id, id: id}, {personaldata_id: personaldata_id, id:id});
          }
      }

    return (
        <VStack height="100%" width="100%" _dark={{bg:"tema.3"}} _light={{bg:"tema.2"}}>
           
            <Heading height="20%" alignSelf="center" _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="4xl" paddingTop="10%">Perfil de Usuario</Heading>
           
            <Avatar height="20%" width="40%" alignSelf="center" marginTop="-10%" source={{
                uri: "https://www.w3schools.com/css/img_lights.jpg" }}>
            </Avatar>

            <VStack height="40%" alignSelf="center" space={5} marginTop="10%">
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="2xl" >Nombre: {personalData?.name}</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="2xl" >Apellidos: {personalData?.lastname}</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="2xl" >Correo: {user?.email}</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="2xl" >Area: {personalData?.area}</Text>
                <Text _dark={{color:"tema.2"}} _light={{color:"tema.3"}} fontSize="2xl" >Plantel: {personalData?.plantel}</Text>
            </VStack>

            <HStack height="10%" alignItems="center" alignSelf="center" space="1/6" marginTop="20%">    
              <TouchableOpacity onPress={validateRole}>
                    <Image size="10" source={require('../assets/C1B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="home" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("settings",{personaldata_id: personaldata_id, id: id}, {personaldata_id: personaldata_id, id:id})}>
                    <Image size="10" source={require('../assets/SE2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="settings" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setIsOpen1(!Exit)}>
                    <Image size="10" source={require('../assets/CS2B.png')} _dark={{ color: "tema.2", tintColor: "tema.2" }} _light={{ color: "tema.3", tintColor: "tema.3" }} alt="exit" />
                    <AlertDialog isOpen={Exit} onClose={CloseE}>
                        <AlertDialog.Content _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}}>
                            <AlertDialog.Body _dark={{bg: "tema.2"}} _light={{bg: "tema.3"}} alignSelf="center">
                                <TouchableOpacity onPress={CloseE}>
                                    <Image size="5" marginLeft="90%" marginBottom="10%" source={require('../assets/XA.png')} _dark={{ color: "tema.3", tintColor: "tema.3" }} _light={{ color: "tema.2", tintColor: "tema.2" }} alt="close" />
                                </TouchableOpacity>
                                <Text _dark={{color: "tema.3"}} _light={{color: "tema.2"}} fontSize="md" textAlign="center">¿Esta seguro de cerrar sesión?</Text>
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
export default Profile;