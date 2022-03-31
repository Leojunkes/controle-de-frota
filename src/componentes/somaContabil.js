import { Box, Flex } from "@chakra-ui/react";
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
        alignItems="center"
        justifyContent="center"
        color="gray.300"
        h="60px"
        w="100px"
        bg="#0a0a0a"
        fontSize="1.1rem"
      >
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total1)}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray.300"
        h="60px"
        w="100px"
        bg="#0a0a0a"
        fontSize="1.1rem"
      >
        {totalCar}
      </Box>
    </Flex>
  );
}
