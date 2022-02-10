import tw from 'tailwind-styled-components';

export const Form = tw.form`
  flex
  mt-16
  justify-around
`;

export const Input = tw.input`
  rounded-md
  sm:text-sm
  pr-12
  text-black
  pl-7
`;

export const Button = tw.button`
  bg-blue-500
  group
  flex
  items-center
  text-white
  text-sm
  leading-6
  py-2
  pr-3
  pl-2
  shadow-sm
  rounded-md
  hover:bg-blue-400
  border-b-4
  border-blue-700
  hover:border-blue-500
  font-bold
`;
