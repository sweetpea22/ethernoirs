/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { letterVariant, sentenceVariant } from '@/styles/animations';
import { useAccount } from 'wagmi';
import SnarkProof from './SnarkProof';

export default function SolveGame() {
  const sentenceToSplit = `You have one try to guess who the murderer is. The result is submitted as a ZKP so it isn't revealed to people still playing. To prove you solved the riddle, enter the number that corresponds to the first letter of the color of the killer's hair in slot 1. Then enter street number he was last seen on. Click the pin icon to enter the answer.`;
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
            Solve
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
        <SnarkProof />
        </div>
    </div>
  );
}
