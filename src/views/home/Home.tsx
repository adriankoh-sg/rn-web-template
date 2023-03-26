import React from 'react';
import {Text} from 'react-native';
import {Container, HStack, Box, Heading} from 'native-base';

export const Home = () => {
  return (
    <Container>
      <Heading>App Title</Heading>
      <HStack space={10} p={5} flexWrap="wrap">
        <Text>Begin</Text>
        <Box width={100} height={100} rounded="md" bgColor="amber.100" />
        <Box width={100} height={100} rounded="md" bgColor="amber.200" />
        <Box width={100} height={100} rounded="md" bgColor="amber.300" />
        <Box width={100} height={100} rounded="md" bgColor="blue.100" />
        <Text>Ending</Text>
      </HStack>
    </Container>
  );
};
