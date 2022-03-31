import { Box, Flex, HStack, Text, Badge, Grid } from "@chakra-ui/react";
import { Button, CardGroup, Card, CardImg, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import frota from "../../data/veiculos.json";

const Content = () => {
  //const total = frota.veiculos.reduce((sumtotal, veiculo) => {
  //  return (sumtotal += veiculo.valorIpva);
  //});
  //console.log(total);
  const [frotaNew, setFrota] = useState([]);
  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem("cars"));
    const cars1 =
      localStorage.getItem("cars") !== null ? localStorageTasks : [];
    console.log(frotaNew);

    setFrota([...cars1]);
  }, []);

  return (
    <div style={{ margin: "10px 10px 0 10px", gap: 8 }} className="veiculos">
      {frotaNew.map((v) => (
        <CardGroup>
          <HStack>
            <Card>
              <CardImg
                alt="Card image cap"
                src="data:image/jpeg;base64,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"
                width="100%"
              />

              <CardBody>
                <Box
                  w="70%"
                  m="0 auto"
                  display="flex"
                  justifyContent="center"
                  border="3px solid black"
                >
                  <Text fontSize="1.5rem" color="gray.900" tag="h5">
                    {v.placa}
                  </Text>
                </Box>
                <Box mr="100px">
                  <Box mt="10px">
                    <Text fontWeight="" tag="h5">
                      <label
                        style={{
                          fontFamily: "Questrial",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        Renavan:
                      </label>{" "}
                      {v.renavan}
                    </Text>
                    <Text tag="h5">
                      <label
                        style={{
                          fontFamily: "Questrial",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        Tipo:
                      </label>{" "}
                      {v.tipo}
                    </Text>
                    <Text tag="h5">
                      <label
                        style={{
                          fontFamily: "Questrial",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        Ano:
                      </label>{" "}
                      {v.ano}
                    </Text>
                  </Box>

                  <Flex>
                    <Text
                      fontSize="1.1rem"
                      fontFamily="Questrial"
                      fontWeight="bold"
                      className="text"
                      tag="h6"
                    >
                      Vencimento
                    </Text>
                    <Box ml="4px">
                      <Badge
                        fontSize="0.9rem"
                        paddingTop="2px"
                        colorScheme="green"
                        borderRadius="8px"
                        h="25px"
                      >
                        {v.vencimentoIpva}
                        {v.status}
                      </Badge>
                    </Box>
                  </Flex>
                  <Box>
                    <Text></Text>
                  </Box>
                  <Flex>
                    <Text
                      fontSize="1.1rem"
                      fontFamily="Questrial"
                      fontWeight="bold"
                    >
                      Venc.Parcela1:
                    </Text>
                    <Text ml="10px">{v.vencimentoIpvaCota1}</Text>
                  </Flex>
                  <Box>
                    <Text
                      fontSize="1.1rem"
                      fontFamily="Questrial"
                      fontWeight="bold"
                    >
                      Valor IPVA:{" "}
                      <label style={{ fontWeight: "bold" }}>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(v.valorIpva)}
                      </label>
                    </Text>
                  </Box>
                </Box>
                <Box mt="8px">
                  <Button color="danger">Multas</Button>
                </Box>
              </CardBody>
            </Card>
          </HStack>
        </CardGroup>
      ))}
    </div>
  );
};
export default Content;
