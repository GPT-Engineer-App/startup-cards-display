import React from "react";
import { ChakraProvider, Box, SimpleGrid, Text, Heading, Flex, Image, theme } from "@chakra-ui/react";
import { FaSeedling } from "react-icons/fa";

// Mock data for startups and their cofounders
const startups = [
  {
    name: "Eco Innovate",
    cofounders: "Alice Johnson & Bob Smith",
    imageUrl: "https://images.unsplash.com/photo-1705807645378-1d3de7930d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFY28lMjBJbm5vdmF0ZSUyMHN0YXJ0dXB8ZW58MHx8fHwxNzA5ODIzOTY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Green Tech",
    cofounders: "Carol Taylor & Daniel Anderson",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcmVlbiUyMFRlY2glMjBzdGFydHVwfGVufDB8fHx8MTcwOTgyMzk2OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Sustainable Solutions",
    cofounders: "Emily Harris & Frank Martinez",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdXN0YWluYWJsZSUyMFNvbHV0aW9ucyUyMHN0YXJ0dXB8ZW58MHx8fHwxNzA5ODIzOTY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Steep.app",
    cofounders: "Sam Rodgers & Taylor Brooks",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGVlcC5hcHB8ZW58MHx8fHwxNzA5ODIzOTY5&ixlib=rb-4.0.3&q=80&w=1080",
    website: "https://www.steep.app",
  },
  {
    name: "Bits.bi",
    cofounders: "Jordan Case & Alex Hart",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaXRzLmJpfGVufDB8fHx8MTcwOTgyMzk2OXww&ixlib=rb-4.0.3&q=80&w=1080",
    website: "https://www.bits.bi",
  },
];

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={5}>
        <Flex align="center" justify="space-between" mb={10}>
          <Heading as="h1" size="xl" letterSpacing="tight">
            Supported Startups <FaSeedling />
          </Heading>
        </Flex>
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {startups.map((startup, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="brand.700" borderColor="brand.800" boxShadow="md">
              <Image src={startup.imageUrl} alt={`Image of ${startup.name}`} borderRadius="md" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {startup.name}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>
                Cofounders: {startup.cofounders}
              </Text>
              <Image src={startup.logoUrl} alt={`Logo of ${startup.name}`} boxSize="50px" objectFit="contain" mb={4} />
              <Text as="a" href={startup.website} fontSize="sm" color="blue.500" isExternal>
                Visit website
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
