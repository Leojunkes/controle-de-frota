import { Box, Flex, Text } from "@chakra-ui/react";
import data from "../../data/veiculos.json";
export default function Sum() {
  var quantidade = 1;
  var total1 = data.veiculos.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + item.valorIpva * quantidade;
  }
  const totalCar = data.veiculos.length;
  return (
    <Flex>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="gray.100"
        h="60px"
        padding="0 20px 0 20px"
        borderRadius="8px"
        bg="#3460ce"
        fontSize="1.1rem"
      >
        <Text>TOTAL IPVA</Text>
        <Text fontSize="1.2rem" fontFamily='Questrial'>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total1)}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="8px"
        alignItems="center"
        justifyContent="center"
        color="gray.100"
        h="60px"
        w="100px"
        bg="#410098"
        fontSize="1.1rem"
      >
        <Text>CARROS</Text>
        <Text fontSize="1.2rem" fontFamily='Questrial'>{totalCar}</Text>
      </Box>
    </Flex>
  );
}
