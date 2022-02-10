import tw from 'tailwind-styled-components';

export const DeleteBtn = tw.button`
  bg-red-600
  px-4
  py-2
  text-base
  font-medium
  shadow-sm
  border-transparent
  border
  rounded-md
  text-white
  hover:bg-red-700
  focus:outline-none
  focus:ring-offset-2
  focus:ring-red-500
  ml-3
  sm:w-auto
  sm:text-sm
`;

export const EditBtn = tw.button`
bg-white
  px-4
  py-2
  text-base
  shadow-sm
  border-transparent
  border
  rounded-md
  text-blue-500
  font-medium
  hover:bg-indigo-50
  focus:outline-none
  focus:ring-offset-2
  sm:ml-3
  sm:text-sm
  w-16
`;

export const SaveBtn = tw(EditBtn)``;
