/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { letterVariant, sentenceVariant } from '@/styles/animations';
import CustomBtn from './CustomBtn';
import { GameMove } from '@/pages';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MintButton from './Superuser/MintSpecialItemButton';
import NonceCheck from './Superuser/NonceCheck';
import { useAccount } from 'wagmi';

export default function SuperUser() {
  const sentenceToSplit = `Superusers can add entropy to the game and extend the story. All you have to do is prove that your wallet has transactions from NFT cannon events.`;
  const split = sentenceToSplit.split(' ');

  const {address} = useAccount()

  return (
    <div className='flex'>
      <div className='mx-auto w-full h-full lg:max-w-1/3 rounded-lg bg-[#2a2a2a] px-5 py-6 shadow sm:px-6'>
        <div className='mx-auto flex items-center justify-center bg-[#0f0f0f]'>
          <img src='/sheet.png' className='w-1/2' alt='' />
        </div>
        <div className='mt-6 text-center sm:mt-5'>
          <h3 className='text-2xl font-semibold leading-6 text-gray-100'>
            Are you a superuser? 🤔
          </h3>
          <div className='mt-2'>
            <motion.p
              className='text-2xl text-gray-300'
              variants={sentenceVariant}
              initial='hidden'
              animate='visible'>
              {split.map((word, i) => (
                <motion.span key={i} variants={letterVariant}>
                  {word}{' '}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
      <div className='mx-auto flex-col items-center w-full lg:max-w-1/3 h-full px-4 py-5'>
        <h3 className='py-4 text-xl text-white'>
          Adding entropy to the game can mean any of the following: mint
          alternate evidence, add a new character or more!{' '}
        </h3>
        <div className='flex flex-col gap-x-4 my-6'>
          
        </div>
        <div className='h-[50%] flex justify-center items-end gap-x-5 '>
          <CustomBtn
            name='Inventory'
            imageUrl='/book.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Solve'
            imageUrl='/pin.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Superusers'
            imageUrl='/lookup.png'
            imgClassNames='w-[80px]'
            disabled
          />
          <CustomBtn
            disabled
            name='History'
            imageUrl='/sheet.png'
            imgClassNames='w-[80px]'
          />
        </div>
      </div>
    </div>
  );
}
