import React from "react";
import { Button, FormControl, Input, VStack,WarningOutlineIcon, Select, CheckIcon } from "native-base";

function LoginExample() {
    const [formData, setData] = React.useState({})
    const [errorNickName, setErrorsNickName] = React.useState({})
    const [errorService, setErrorService] = React.useState("");
    const [service, setService] = React.useState("");

    const validate = () => {

      setErrorsNickName
      let isValid = true

      if (formData.nickname === undefined){
        setErrorsNickName({...errorNickName, nickname : 'Nickname is required'})
        return false
      }else if (formData.nickname.lengt < 8){
          setErrorsNickName({...errorNickName, nickname : 'Nickname is too short'})
        return false
      }
      if (errorService===""){
        setErrorService('service is required')
        isValid = false
      }
     }
     
    const send_request = async () =>{
        console.log('ok', formData)
        try{
            const response = await response. json();
            console.log('json', json)
            return json
        } catch (error) {
            console.error(error);
        }   
    }
        
    const submit = () => { validate() ? console.log('ok', formData) : console.log('bad', errorNickName) }
    
    return (
        <VStack>
            
            <FormControl isRequired isInvalid={'nickname'in errorNickName}>
                <FormControl.Label>Favorite framework</FormControl.Label>
                <Input p={2} placeholder="Is it react?" 
                onChangeText={value=> setData({...formData, nickname : value})}/>
                {'nickname'in errorNickName ?  
                <FormControl.ErrorMessage>{errorNickName.nickname} Something is wrong</FormControl.ErrorMessage> :
                <FormControl.HelperText>Nickname should contain atleast 6 caracter.</FormControl.HelperText>
                }
            </FormControl>
            
            <FormControl w="3/4" maxW="300" isRequired isInvalid={service === ""}>
        <FormControl.Label>Choose service</FormControl.Label>
        <Select selectedValue={errorService} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1" onValueChange={itemValue => setErrorService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
       
       {service === "" ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> :
        ""
        } 
      </FormControl>
            <Button bg="tema.1" onPress={submit}> Primary </Button>
        </VStack>    
    )
}
export default LoginExample;
