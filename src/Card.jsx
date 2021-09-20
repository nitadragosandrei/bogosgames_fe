import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";

function CardComponent() {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%">
      <Image
        source={{
          uri: "https://casino.com.ro/wp-content/uploads/2020/06/totul-despre-remi-1024x356.jpg",
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        Remi
      </Text>
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={["md", "lg", "md"]} noOfLines={2}>
          Remi este cel mai frumos joc de pe planeta
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
          Jocul de Rummy contine 106 piese: 104 piese cu numere si 2 piese de
          Joly. Piesele cu numere sunt impartite in 4 culori: rosu, galben,
          albastru si negru. Fiecare culoare contine numerele de la 1 la 13 in
          dublu exemplar. De asemenea un joc de Rummy mai contine 4 table pe
          care jucatorii tin piesele in timpul jocului in asa fel incat fiecare
          jucator poate vedea doar piesele lui...
        </Text>
      </Stack>
    </Box>
  );
}

export default function () {
  return (
    <Center flex={1}>
      <CardComponent />
    </Center>
  );
}
