import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const ContainerWithCustomCss = styled.div`
  background-color: #1e293b;
`;

export const Container = tw(ContainerWithCustomCss)`
  container
  text-white
  flex
  flex-col
  items-center
  h-screen
  w-screen
`;
