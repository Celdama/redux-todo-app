import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const ContainerWithCustomCss = styled.div`
  background-color: #1e293b;
`;

export const Container = tw(ContainerWithCustomCss)`
  flex
  items-center
  justify-center
  flex-col
  w-full
  text-white
`;
