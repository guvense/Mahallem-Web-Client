import React from 'react';
import styled from 'styled-components';

import { Box, Container, Heading, Link, Paragraph, Screen, Text, utils } from 'styled-minimal';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
`;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
      <Header>
        <Heading>Welcome to Mahallem</Heading>
      </Header>
      <Box textAlign="center" mb={4}>
        <Heading as="h5">Some Content Here</Heading>
        <Text fontSize={1}>
        </Text>
      </Box>
    </Container>
  </Screen>
);

export default Private;
