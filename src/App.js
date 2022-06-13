import { Box , Stack, StackDivider} from "@chakra-ui/react"
import person from "./images/person.jpg"
import Datos from './components/Datos';
import { FaTwitter ,FaInstagram,FaWhatsapp} from "react-icons/fa";
import fondo from "./images/fondo.jpg"
function App() {
  return (
   <>
    <Box
       bgImage={person}
       backgroundPosition="center"
       bgRepeat="no-repeat"
       h="100vh"
       backgroundSize="cover"
    /> 


  <Box 
     bgImage= {fondo}
     bgRepeat="no-repeat"
     backgroundSize="cover"
  >

  <Stack direction="column" 
         divider={<StackDivider borderColor="gray.700"/> } 
         padding="50px" 
         margin="0px auto" 
         w="90%" 
         maxWidth="1280px"
         justifyContent="start"
  >
     <Datos fecha="25 DE MAYO"  lugar="MONTERREY" concierto="SHOWCENTER COMPLEX" boton="Sold Out!"/>
     <Datos fecha="25 DE MAYO"  lugar="CDMX" concierto="SHOWCENTER COMPLEX" boton="Comprar Ahora!"/>
     <Datos fecha="28 DE MAYO"  lugar="MONTERREY" concierto="PEPSI CENTER" boton="Sold Out!"/>
     <Datos fecha="29 DE MAYO"  lugar="MADRID" concierto="CALLE 2" boton="Sold Out!"/>
     <Datos fecha="5 DE JUNIO"  lugar="IBIZA" concierto="PACHA" boton="Comprar Ahora!"/>
     <Datos fecha="5 DE JUNIO"  lugar="BARCELONA" concierto="PRIMAVERA SOUND" boton="Comprar Ahora!"/>"  
     <Datos fecha="11 DE JUNIO"  lugar="CADIZ" concierto="
      CABO DE PLATA" boton="Sold Out!"/>
     <Datos fecha="17 DE JUNIO"  lugar="LIMA" concierto="
      CABO DE PLATA" boton="Sold Out!"/>
       <Datos fecha="18 DE JUNIO"  lugar="LIMA" concierto="
      CABO DE PLATA" boton="Sold Out!"/>
      <Datos fecha="19 DE JUNIO"  lugar="URUGUAY" concierto="
      MONTEVIDEO CITY" boton="Sold Out!"/>
     <Datos fecha="19 DE JUNIO"  lugar="BUENOS AIRES" concierto="
      ESTADIO VELEZ" boton="Sold Out!"/>
     <Datos fecha="21 DE JULIO"  lugar="BUENOS AIRES" concierto="
      ESTADIO VELEZ" boton="Comprar Ahora!"/>
    <Datos fecha="22 DE JULIO"  lugar="BUENOS AIRES" concierto="
     ESTADIO VELEZ" boton="Comprar Ahora!"/>
     <Datos fecha="28 DE JULIO"  lugar="CHILE" concierto="
     CHILE" boton="Comprar Ahora!"/>
      <Datos fecha="28 DE JULIO"  lugar="CHILE" concierto="
     CABO DE BICENTENARIO" boton="Comprar Ahora!"/>
     <Datos fecha="28 DE JULIO"  lugar="CHILE" concierto="
     CABO DE BICENTENARIO" boton="Comprar Ahora!"/>
  </Stack>
  </Box>
 
  <Stack as='footer' 
        color="white" 
        background="black" 
        direction="row" 
        fontSize={{base: '50px', sm: '100px'}} 
        justifyContent="center" 
        spacing="30px">

      <FaTwitter />
      <FaInstagram />
      <FaWhatsapp />

  </Stack>
    </>
   
  );
}

export default App;

