import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f0f4f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

const Name = styled.h1`
  font-family: 'Lenox', sans-serif;
  font-size: 48px;
  margin-bottom: 32px;
  color: #ad2167;
`;

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Name>BinaryCapsule</Name>
      <div>
        <span role="img" aria-label="man construction worker">
          👷‍♂️
        </span>
        <span role="img" aria-label="pill">
          💊
        </span>
        <span role="img" aria-label=":construction sign">
          🚧
        </span>
      </div>
    </Wrapper>
  </Layout>
);

export default IndexPage;
