import React from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';


export default function mintButton({choice, index}: any) {
  return (
    <button
      type='button'
      onClick={() => {}}
      className='relative inline-flex items-center
              max-w-[80%] rounded-lg bg-red-900 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-red-800 focus:z-10'
      key={index}>
      {choice.name}
    </button>
  );
};

