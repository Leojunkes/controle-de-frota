import Head from "next/head";

import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import Header from "../componentes/header/header";
import Content from "../componentes/content";
import Footer from "../componentes/footer";
import TotalControl from "../componentes/controleTotal/total";
import Sum from "../componentes/somaContabil";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Controle de Frota</title>
      </Head>
      <Header />
      {/*<Sum />*/}
      <Content />
      <Footer />
    </div>
  );
}
