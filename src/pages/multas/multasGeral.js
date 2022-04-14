import {
  Stack,
  Link,
  Flex,
  Button,
  Text,
  Badge,
  Input,
  Box,
  Divider,
  VStack,
  LinkBox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Multas() {
  const [data, setData] = useState();
  useEffect(() => {
    //const veiculesV = localStorage.getItem("veicules");
    var veiculesV = window.localStorage.getItem("veicules");
    var v = JSON.parse(veiculesV);
    const cart = [
      v.multasVeiculos.map((v) => (
        <>
          <Box>
            <VStack>
              <Text>{v.multa1}</Text>
              <Text> {v.multaValor1}</Text>
            </VStack>
          </Box>
          <Box mt="30px">
            <VStack>
              <Text>{v.multa2}</Text>
              <Text> {v.multa2_valor}</Text>
              
            </VStack>
          </Box>
        </>
      )),
    ];

    setData(cart);
    console.log(data);
  }, []);
  const semData = (
    <>
      <Flex>Sem multas</Flex>
    </>
  );
  return (
    <>
      <Flex
        bg="gray.200"
        alignItems="center"
        justifyContent="center"
        maxWidth="620px"
        m="150px auto"
        flexDirection="column"
      >
        <>
          <Box>
            <Box color="gray.800" padding="30px">
              <Text>{data === 0 ? "sem multas" : data}</Text>
            </Box>
          </Box>
          <Link href='/'>
            <Button bg='lightcoral' m="0 auto" type="button">
              Voltar
            </Button>
          </Link>
        </>
      </Flex>
    </>
  );
}
