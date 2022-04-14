import {
  Box,
  Flex,
  HStack,
  Text,
  Badge,
  Grid,
  SelectField,
  Link,
} from "@chakra-ui/react";
import { Button, CardGroup, Card, CardImg, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import frota from "../../data/veiculos.json";

const Content = () => {
  const [saveCar, setSaveCar] = useState([]);
  const veiculeDetail = (id) => {
    const saveCar = frota.veiculos.find((v) => v.id === id);
    localStorage.setItem("veicules", JSON.stringify(saveCar));
    console.log(saveCar);
    setSaveCar(saveCar);
  };

  //const total = frota.veiculos.reduce((sumtotal, veiculo) => {
  //  return (sumtotal += veiculo.valorIpva);
  //});
  //console.log(total);
  const [update, setUpdate] = useState([]);
  const [frotaNew, setFrota] = useState([]);

  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem("cars"));
    const cars1 =
      localStorage.getItem("cars") !== null
        ? localStorageTasks
        : frota.veiculos;
    console.log(frota.veiculos);

    setFrota([...cars1]);
  }, []);

  function removeVeicule(id) {
    if (confirm("Deseja realmente EXCLUIR esse veículo?")) {
      const deleteV = frota.veiculos.filter((task) => task.id !== id);
      setFrota(deleteV);
      alert("excluído com sucesso! Não esqueça de SALVAR");
    }
  }
  function salvarStorage() {
    localStorage.setItem("carOne", JSON.stringify(update));
    alert("salvo com Sucesso!");
  }
  function updateCar(id) {
    const carupdate = frotaNew.find((v) => v.id === id);
    setUpdate(carupdate);
  }

  function updateCarSave() {
    localStorage.setItem("updateCars", JSON.stringify(update));

    alert("salvo com Sucesso!");
  }

  return (
    <>
      <div style={{ margin: "10px 10px 0 10px", gap: 8,fontFamily:'Questrial',fontSize:'18px' }} className="veiculos">
        {frota.veiculos.map((v) => (
          <CardGroup>
            <HStack>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="/imagens/frotawi.png"
                  style={{ width: "27rem", height: "" }}
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
                    <Text fontFamily='Roboto' fontWeight='700' fontSize="1.5rem" color="gray.900" tag="h5">
                      {v.placa}
                    </Text>
                  </Box>
                  <Box mr="150px">
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
                      <Text fontWeight="" tag="h5">
                        <label
                          style={{
                            fontFamily: "Questrial",
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                          }}
                        >
                          Carro:
                        </label>{" "}
                        {v.nome}
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
                      <Text fontFamily='Questrial' ml="10px">{v.vencimentoIpvaCota1}</Text>
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
                  <Link href="multas/multasGeral">
                    <Box m="8px 55px 0 0" justifyContent="" display="flex">
                      <Button
                        onClick={() => veiculeDetail(v.id)}
                        type="button"
                        color="danger"
                      >
                        Multas
                      </Button>
                    </Box>
                  </Link>
                </CardBody>
              </Card>
            </HStack>
          </CardGroup>
        ))}
      </div>
    </>
  );
};
export default Content;
