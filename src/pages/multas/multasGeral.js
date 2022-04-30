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
    var veiculesV = localStorage.getItem("veicules");
    var v = JSON.parse(veiculesV);
    const r = 'R$ : '
    const cart = [
      v.multasVeiculos.map((v) => (
        <>
          <Box>
            <Text>{v.multa1}</Text>
            <pre>{v.multaValor1}</pre>
            <Text>{v.multa1_data}</Text>
          </Box>
          <Box mt="30px">
            <Text>{v.multa2}</Text>
            <pre>{v.multa2_valor}</pre>
            <Text>{v.multa2_data}</Text>
          </Box>
        </>
      )),
    ];

    setData([...cart]);
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
          <Link href="/">
            <Button bg="lightcoral" m="0 auto" type="button">
              Voltar
            </Button>
          </Link>
        </>
      </Flex>
    </>
  );
}
