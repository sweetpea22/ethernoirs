import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { letterVariant, sentenceVariant } from '@/styles/animations';
import CustomBtn from './CustomBtn';
import { GameMove } from '@/pages';

const susOptions = [
  { name: 'Check what info he has on him', href: '#' },
  { name: 'Provoke him', href: '#' },
  { name: 'Walk away', href: '#' },
];

const allyOptions = [
  { name: 'Make a deal', href: '#' },
  { name: 'Ask for proof', href: '#' },
];

export default function GameInterface({
  characterImgUrl = '/env.png',
  characterName = 'Character loading...',
  dialogue = 'Dialogue loading...',
  choiceOptions,
}: any) {
  const sentenceToSplit = `${dialogue}`;
  let [isOpen, setIsOpen] = useState(true);
  const split = sentenceToSplit.split(' ');
  return (
    <div className='flex'>
      <div className='mx-auto w-full h-full lg:max-w-1/3 rounded-lg bg-slate-900 px-5 py-6 shadow sm:px-6'>
        <div className='mx-auto flex items-center justify-center bg-gray-800'>
          <img src={characterImgUrl} className='w-1/2' />
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
              max-w-[80%] rounded-lg bg-white px-8 py-4 my-3 text-xl font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10'
              key={index}>
              {choice.name}
            </button>
          ))}
        </div>
        <div className='h-[50%] flex justify-start items-end gap-x-5 '>
          <CustomBtn
            name='Fact-check'
            imageUrl='/book.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='History'
            imageUrl='/sheet.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Recruit'
            imageUrl='/env.png'
            imgClassNames='w-[80px]'
          />
          <CustomBtn
            name='Directory'
            imageUrl='/lookup.png'
            imgClassNames='w-[80px]'
          />
        </div>
      </div>
    </div>
  );
}
