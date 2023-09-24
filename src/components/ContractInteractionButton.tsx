import React, { useState, useEffect } from 'react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import { itemsAddress, logicAddress } from '@/contracts';
import logic from '@/contracts/logicAbi.json';
import items from '@/contracts/itemsAbi.json';
import { parseGwei } from 'viem';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function ContractInteractionButton({ type }: any) {

  const { address } = useAccount();

  const { config: prepareMint38, isLoading: mint38PrepareData } = usePrepareContractWrite({
    address: itemsAddress as `0x${string}`,
    abi: items.abi,
    functionName: 'mintTo',
    args: [address, 1, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('70'),
});

  const {
    data: mint38Data,
    write:mint38,
  } = useContractWrite(prepareMint38);

  const { config: prepareMint66 } = usePrepareContractWrite({
    address: itemsAddress as `0x${string}`,
    abi: items.abi,
    functionName: 'mintTo',
    args: [address, 2, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('70'),
});

  const {
    data: mint66Data,
    isLoading: mint66Loading,
    write:mint66,
  } = useContractWrite(prepareMint66);


  if (type === 'mint38') {
    return (
      <div>
      <button
        type='button'
        onClick={() => mint38?.()}
        className='relative inline-flex items-center max-w-[80%] rounded-lg bg-blue-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-blue-800 focus:z-10'>
       {mint38PrepareData && (
          <span>
            {' '}
            <ArrowPathIcon className='animate-spin text-indigo-400 h-5 w-5 mr-3' />
          </span>
            )} Save the info.
        </button>
       {mint38Data?.hash && (
          <p className='mt-2 text-left text-white text-lg'>
            Transaction submitted, please check{' '}
            <a
              href={`https://goerli.etherscan.io/tx/${mint38Data?.hash}`}
              className='font-bold text-md text-indigo-600'>
            Etherscan!</a>
          </p>
        )}
        </div>
    );
  } else if (type === 'mint66') {
    return (
         <div>
      <button
        type='button'
        onClick={() => mint66?.()}
          className='relative inline-flex items-center max-w-[80%] rounded-lg bg-blue-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-blue-800 focus:z-10'>
         {mint66Data?.hash && (
          <span>
            {' '}
            <ArrowPathIcon className='animate-spin text-indigo-400 h-5 w-5 mr-3' />
          </span>
            )} Save the information.
        </button>
       {mint66Loading && (
          <p className='mt-2 text-left text-white text-lg'>
            Transaction submitted, please check{' '}
            <a
              href={`https://goerli.etherscan.io/tx/${mint66Data?.hash}`}
              className='font-bold text-md text-indigo-600'>
            Etherscan!</a>
          </p>
        )}
        </div>
    )
  }  else if (type === 'logic') {
    return (
         <div>
      <button
        type='button'
        onClick={() => mint66?.()}
          className='relative inline-flex items-center max-w-[80%] rounded-lg bg-blue-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-blue-800 focus:z-10'>
         {mint66Data?.hash && (
          <span>
            {' '}
            <ArrowPathIcon className='animate-spin text-indigo-400 h-5 w-5 mr-3' />
          </span>
            )} Save the information.
        </button>
       {mint66Loading && (
          <p className='mt-2 text-left text-white text-lg'>
            Transaction submitted, please check{' '}
            <a
              href={`https://goerli.etherscan.io/tx/${mint66Data?.hash}`}
              className='font-bold text-md text-indigo-600'>
            Etherscan!</a>
          </p>
        )}
        </div>
    )
  }
}

// metadata 1155
// 99 inspect proof -> opens the subgraph
