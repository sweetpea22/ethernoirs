/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { letterVariant, sentenceVariant } from '@/styles/animations';
import CustomBtn from './CustomBtn';
import { GameMove } from '@/pages';

export default function GameInterface({
  characterImgUrl,
  characterName = 'Character loading...',
  dialogue = 'Dialogue loading...',
  choiceOptions,
}: any) {
  const sentenceToSplit = `${dialogue}`;
  let [isOpen, setIsOpen] = useState(true);
  const split = sentenceToSplit.split(' ');
  return (
    <div className='flex'>
      <div className='mx-auto w-full h-full lg:max-w-1/3 rounded-lg bg-[#2a2a2a] px-5 py-6 shadow sm:px-6'>
        <div className='mx-auto flex items-center justify-center bg-[#0f0f0f]'>
          {characterImgUrl ? (
            <img src={characterImgUrl} className='w-1/2' alt='' />
          ) : (
            <img src='/clover.png' className='w-1/2' alt='' />
          )}
        </div>
        <div className='mt-6 text-center sm:mt-5'>
          <h3 className='text-2xl font-semibold leading-6 text-gray-100'>
            {characterName}
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
        <h3 className='py-4 text-3xl text-black'>Choose an action, anon:</h3>
        <div className='flex flex-col gap-x-4 my-6'>
          {choiceOptions.map((choice: GameMove, index: number) => (
            <button
              type='button'
              className='relative inline-flex items-center 
              max-w-[80%] rounded-lg bg-red-900 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-red-800 focus:z-10'
              key={index}>
              {choice.name}
            </button>
          ))}
        </div>
        <div className='h-[30%] flex justify-start items-end gap-x-5 '>
          <CustomBtn
            name='Inventory'
            imageUrl='/book.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Solve'
            imageUrl='/env.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Superusers'
            imageUrl='/lookup.png'
            imgClassNames='w-[80px]'
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
