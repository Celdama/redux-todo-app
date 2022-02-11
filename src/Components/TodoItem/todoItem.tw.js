import tw from 'tailwind-styled-components';

export const TaskItem = tw.li`
  flex 
  w-full 
  justify-between 
  py-3 
`;

export const ItemContainer = tw.div`
  flex
  items-center
  w-full
`;

export const Checkbox = tw.input`
  rounded
  w-4
  mt-1
  h-4
  border
border-gray-300
  shadow-sm
  focus:outline-none
  form-checkbox           
  transition
  duration-200    
  appearance-none
  checked:bg-blue-600
  checked:border-blue-600
  bg-no-repeat bg-center bg-contain
  cursor-pointer
  disabled:opacity-75
  disabled:cursor-auto
`;

export const EditTaskInput = tw.input`
  form-control
  mx-2
  w-auto
  block
  px-5
  text-gray-700
  rounded
  bg-white bg-clip-padding
  transition
  ease-in-out
  m-0
  caret-blue-600
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
`;

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
