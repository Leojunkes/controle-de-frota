import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import frota from "../../../data/veiculos.json";

export default function TotalControl() {
  const array = frota.veiculos.map((v) => <Text>{v.valorIpva}</Text>);

  const totalVeiculos = array.length;
  console.log(array);

  return (
    <div>
      <Flex justifyContent="center">
        <Box color="gray.100" bg="red">
          <Text>{array}</Text>
          <Text>Resultado: </Text>
          <Text id="teste"></Text>
        </Box>
      </Flex>
    </div>
  );
}
