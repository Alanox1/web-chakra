
import {Text,Stack,Button} from "@chakra-ui/react"
export default function Datos({fecha,lugar,concierto,boton}){
    let colorDelBoton;
    boton === "Sold Out!"?colorDelBoton = "soldaut.500":colorDelBoton = "brand.300"
  return (
    <Stack spacing={{base:"10px",md:"80px"}} 
           align="center"
           w="80%" 
           margin="0px auto"  
           direction={{base:"column",sm:"row"}} 
           justifyContent="center"
           >

        <Text align="center"  >{fecha}</Text>

        <Text  align="start" 
               color="purple.600" 
               fontSize={{base:"17px",md:"20px",lg:"22px"}} 
               fontWeight="900">
            {lugar}
        </Text>

        <Text fontSize={{base:"15px",md:"18px"}} >
            {concierto} 
        </Text>

        <Button fontSize={{base:"15px",md:"18px"}} 
                bgColor={colorDelBoton} 
                padding="10px" 
                size={{base:"20px"}} 
                color="gray.900">
            {boton}     
        </Button> 
    </Stack>
    )
}