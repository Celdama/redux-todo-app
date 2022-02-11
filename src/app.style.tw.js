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
  min-h-full 
  h-full 
  pt-14
  pb-28
`;

export const TitleApp = tw.h1`
  font-semibold text-4xl text-slate-300 mb-16
`;
