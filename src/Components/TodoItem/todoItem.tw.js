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
  py-2
  text-gray-700
  rounded
  bg-white bg-clip-padding
  transition
  ease-in-out
  m-0
  caret-red-500
  focus:text-gray-700 
  focus:bg-white 
  focus:border-blue-600 
  focus:outline-none
`;

export const LabelItemTitle = tw.label`
  pr-12
  py-2
  pl-7
`;

export const ContainerBtnItem = tw.div`
  flex
  gap-2
`;

export const BtnItem = tw.button`
  px-4
  py-2
  text-sm
  font-medium
  rounded-md
  border-transparent
  border
  w-16
`;

export const DeleteBtn = tw(BtnItem)`
  bg-red-600
  w-10
`;

export const EditBtn = tw(BtnItem)`
bg-blue-400
  disabled:opacity-75
  disabled:cursor-auto
`;

export const SaveBtn = tw(EditBtn)``;
