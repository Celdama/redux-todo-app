import tw from 'tailwind-styled-components';

const Button = tw.button`
  bg-transparent
hover:bg-white
  hover:text-blue-700
text-white
  font-semi-bold 
  py-2 
  px-4 
  rounded 
  mx-1
  border
  hover:border-transparent
  disabled:bg-white
  disabled:text-blue-700
  transition
  ease-in-out
`;

export default Button;
