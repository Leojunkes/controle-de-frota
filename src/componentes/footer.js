/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
} from "@chakra-ui/react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        color="gray.300"
        h="60px"
        bg="#0a0a0a"
        fontSize="1.1rem"
      >
        LeoJunkes Online 2022
      </Flex>
    </>
  );
}
