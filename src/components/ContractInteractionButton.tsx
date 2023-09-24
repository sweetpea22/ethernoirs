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
import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/wagmi/react';



export default function ContractInteractionButton({ type }: any) {

  const { address, isConnected, isDisconnected } = useAccount();
  const { open:openWallet } = useWeb3Modal();

  const { config: prepareMint38, isLoading: mint38PrepareData } = usePrepareContractWrite({
    address: itemsAddress as `0x${string}`,
    abi: items.abi,
    functionName: 'mintTo',
    args: [address, 1, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: mint38Data,
    write: mint38,
    isSuccess: mint38Success
  } = useContractWrite(prepareMint38);

  const { config: prepareMint66 } = usePrepareContractWrite({
    address: itemsAddress as `0x${string}`,
    abi: items.abi,
    functionName: 'mintTo',
    args: [address, 2, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: mint66Data,
    isLoading: mint66Loading,
    isSuccess: mint66Success,
    write: mint66,
  } = useContractWrite(prepareMint66);

  const { config: prepareChoice7290 } = usePrepareContractWrite({
    address: logicAddress as `0x${string}`,
    abi: logic.abi,
    functionName: 'makeChoice',
    args: [3, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: choice7290Data,
    isLoading: choice7290Loading,
    isSuccess: choice7290Success,
    write: choice7290,
  } = useContractWrite(prepareChoice7290);

  const { config: prepareChoice7291 } = usePrepareContractWrite({
    address: logicAddress as `0x${string}`,
    abi: logic.abi,
    functionName: 'makeChoice',
    args: [3, 1],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: choice7291Data,
    isLoading: choice7291Loading,
    isSuccess: choice7291Success,
    write: choice7291,
  } = useContractWrite(prepareChoice7291);


  const { config: prepareChoice420 } = usePrepareContractWrite({
    address: logicAddress as `0x${string}`,
    abi: logic.abi,
    functionName: 'makeChoice',
    args: [1, 0],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: choice420Data,
    isLoading: choice420Loading,
    isSuccess: choice420Success,
    write: choice420,
  } = useContractWrite(prepareChoice7290);

  const { config: prepareChoice421 } = usePrepareContractWrite({
    address: logicAddress as `0x${string}`,
    abi: logic.abi,
    functionName: 'makeChoice',
    args: [1, 1],
    gas: 1_000_000n,
    gasPrice: parseGwei('2'),
  });

  const {
    data: choice421Data,
    isSuccess: choice421Success,
    write: choice421,
  } = useContractWrite(prepareChoice421);


  if (type === 'mint38') {
    return (
      <div>
        <button
          type='button'
          onClick={() => mint38?.()}
          className='relative flex flex-col items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
          {mint38PrepareData && (
            <span>
              {' '}
              <ArrowPathIcon className='animate-spin text-gray-400 h-5 w-5 mr-3' />
            </span>
          )} Save the info.
        </button>
        {mint38Success && (
          <>
            <p className='mt-2 text-left text-white text-lg'>
              Confirm in your wallet, then please check{' '}
              <a
                href={`https://goerli.etherscan.io/tx/${mint38Data?.hash}`}
                className='font-bold text-md text-indigo-600'>
                Etherscan!</a>
            </p>
            <Link
              type='button' className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='729'>Continue</Link></>
        )}
      </div>
    );
  } else if (type === 'mint66') {
    return (
      <div>
        <button
          type='button'
          onClick={() => mint66?.()}
          className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
          {mint66Data?.hash && (
            <span>
              {' '}
              <ArrowPathIcon className='animate-spin text-gray-400 h-5 w-5 mr-3' />
            </span>
          )} Save the information.
        </button>
        {mint66Loading && (
          <>
          <p className='mt-2 text-left text-white text-lg'>
            Confirm in your wallet, then please check{' '}
            <a
              href={`https://goerli.etherscan.io/tx/${mint66Data?.hash}`}
              className='font-bold text-md text-gray-600'>
              Etherscan!</a>
          </p>
             <Link
              type='button' className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='99'>Continue</Link></>
        )}
      </div>
    )
  } else if (type === 'choice729') {
    return (
      <div>
        {!choice7290Loading && (<button
          type='button'
          onClick={() => choice7290?.()}
          className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
          {choice7290Data?.hash && (
            <span>
              {' '}
              <ArrowPathIcon className='animate-spin text-gray-100 h-5 w-5 mr-3' />
            </span>
          )} Agree with him. Probably nothing.
        </button>)}
        {choice7290Success && (
          <>
            <p className='mt-2 text-left text-white text-lg'>
              Confirm in your wallet, then please check{' '}
              <a
                href={`https://goerli.etherscan.io/tx/${choice7290Data?.hash}`}
                className='font-bold text-md text-gray-600'>
                Etherscan!</a>
            </p>
            <Link
              type='button' className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='66'>Continue</Link></>
        )}
        {!choice7290Loading && (<button
          type='button'
          onClick={() => choice7291?.()}
          className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
          {choice7291Data?.hash && (
            <span>
              <ArrowPathIcon className='animate-spin text-gray-100 h-5 w-5 mr-3' />
            </span>
          )}
          He&apos;s sus. Ask him what he knows
        </button>)}
        {choice7291Success && (
          <>
            <p className='mt-2 text-left text-white text-lg'>
              Confirm in your wallet, then please check{' '}
              <a
                href={`https://goerli.etherscan.io/tx/${choice7290Data?.hash}`}
                className='font-bold text-md text-gray-600'>
                Etherscan!</a>
            </p>
            <Link
              type='button' className='relative inline-flex items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='55'>Continue</Link></>
        )}
      </div>
    )
  } 

  return (
    <div>
      {(!isConnected || isDisconnected || !address) ? (<button className='rounded-lg bg-slate-700 text-white py-4 px-4 text-lg  hover:brightness-50 font-medium' onClick={() => openWallet()}>Connect Wallet</button>) :
        (<>       {!choice420Loading && (<button
          type='button'
          onClick={() => choice420?.()}
          className='relative flex flex-col items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
          {choice420Data?.hash && (
            <span>
              <ArrowPathIcon className='animate-spin text-gray-100 h-5 w-5 mr-3' />
            </span>
          )}  Run away.
        </button>)}
          {choice420Success && (
            <>
              <p className='mt-2 text-left text-white text-lg'>
                Confirm in your wallet, then please check{' '}
                <a
                  href={`https://goerli.etherscan.io/tx/${choice420Data?.hash}`}
                  className='font-bold text-md text-gray-600'>
                  Etherscan!</a>
              </p>
              <Link
                type='button' className='relative flex flex-col items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='83'>Continue</Link></>
          )}
          {!choice420Loading && (<button
            type='button'
            onClick={() => choice421?.()}
            className='relative flex flex-col items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800 focus:z-10'>
            {choice421Data?.hash && (
              <span>
                <ArrowPathIcon className='animate-spin text-gray-100 h-5 w-5 mr-3' />
              </span>
            )}
            Grab your gun.
          </button>)}
          {choice421Success && (
            <>
              <p className='mt-2 text-left text-white text-lg'>
                Confirm in your wallet, then please check{' '}
                <a
                  href={`https://goerli.etherscan.io/tx/${choice421Data?.hash}`}
                  className='font-bold text-md text-gray-600'>
                  Etherscan!</a>
              </p>
              <Link
                type='button' className='relative flex flex-col items-center max-w-[80%] rounded-lg bg-gray-600 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-gray-800' href='38'>Continue</Link></>
          )}
        </>)}
    </div>
)}