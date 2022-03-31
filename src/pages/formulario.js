import {
  Stack,
  Link,
  Flex,
  Button,
  Text,
  Badge,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import frota from "../../data/veiculos.json";

export default function FrotaForm() {
  const [frotaNew, setFrota] = useState(frota.veiculos);
  const [newnome, setNome] = useState("");
  const [newano, setAno] = useState("");
  const [newvencimentoIpva, setVencimeIpva] = useState("");
  const [newvencimentoIpvaCota1, setVencIpvaCota1] = useState("");
  const [newplaca, setPlaca] = useState("");
  const [newrenavan, setRenavan] = useState("");
  const [newvalorIpva, setValorIpva] = useState("");
  const [newtipo, setTipo] = useState("");
  const [newcor, setCor] = useState("");
  console.log(frotaNew);

  function handleCars(e) {
    e.preventDefault();
    const newFrota = {
      id: Math.random(),
      nome: newnome,
      ano: newano,
      vencimentoIpva: newvencimentoIpva,
      vencimentoIpvaCota1: newvencimentoIpvaCota1,
      placa: newplaca,
      renavan: newrenavan,
      valorIpva: newvalorIpva,
      tipo: newtipo,
      cor: newcor,
    };
    //var frotaPush = frota.veiculos.push(newFrota);
    //console.log(frotaPush);
    console.log(newFrota);
    alert("carro incluído com sucesso!");
    setFrota(() => [...frotaNew, newFrota]);
  }
  function salvarStorage() {
    localStorage.setItem("cars", JSON.stringify(frotaNew));
  }
  return (
    <>
      <Flex
        as="form"
        flexDirection="column"
        onSubmit={handleCars}
        background="var(--gray-700)"
        border="1px solid #eba417"
        alignItems="center"
        mt="-30px"
        borderRadius="8px"
        width="25rem"
        h="100%"
        boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
      >
        <label style={{ marginTop: "10px" }} htmlFor="">
          <big style={{ color: "#eac74a" }}>Formulário</big>
        </label>

        <Flex mt="4" flexDirection="column">
          <Stack spacing="2">
            <label className="nome" htmlFor="">
              Nome
            </label>
            <Input
              id="nome"
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setNome(e.target.value)}
              value={newnome}
              focusBorderColor="yellow.200"
            />

            <label className="email" htmlFor="">
              Ano
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="ano"
              placeholder=""
              onChange={(e) => setAno(e.target.value)}
              value={newano}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              VencimentoIpva
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setVencimeIpva(e.target.value)}
              value={newvencimentoIpva}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              Vencimento IPVA cota única
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="number"
              placeholder=""
              onChange={(e) => setVencIpvaCota1(e.target.value)}
              value={newvencimentoIpvaCota1}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              Placa
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setPlaca(e.target.value)}
              value={newplaca}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              Renavan
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setRenavan(e.target.value)}
              value={newrenavan}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              ValorIpva
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setValorIpva(e.target.value)}
              value={newvalorIpva}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              Tipo
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setTipo(e.target.value)}
              value={newtipo}
              focusBorderColor="yellow.200"
            />
            <label className="email" htmlFor="">
              Cor
            </label>

            <Input
              color="gray.900"
              className="inputGroup"
              type="text"
              placeholder=""
              onChange={(e) => setCor(e.target.value)}
              value={newcor}
              focusBorderColor="yellow.200"
            />

            <Flex justifyContent="space-between" w="100%">
              <Link to="/">
                <Button
                  border="none"
                  color="colors.900"
                  colorScheme="yellow"
                  type="submit"
                  boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
                >
                  Cadastrar
                </Button>
              </Link>

              <Link href="/">
                <Button
                  boxShadow="6.48483px 12.4075px 0px rgba(0, 0, 0, 0.24), 4.7167px 9.02455px 0px rgba(0, 0, 0, 0.19425), 3.28294px 6.28132px 0px rgba(0, 0, 0, 0.162), 2.15316px 4.11969px 0px rgba(0, 0, 0, 0.13875), 1.29697px 2.48151px 0px rgba(0, 0, 0, 0.12), 0.683946px 1.30861px 0px rgba(0, 0, 0, 0.10125), 0.283711px 0.54283px 0px rgba(0, 0, 0, 0.078), 0.0658615px 0.126014px 0px rgba(0, 0, 0, 0.04575);"
                  border="none"
                  onClick={salvarStorage}
                  colorScheme="green"
                  type="button"
                  w="50%"
                >
                  Salvar
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}