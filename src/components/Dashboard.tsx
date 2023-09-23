'use client';
import { Fragment, ReactComponentElement, ReactElement } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Web3Button } from '@web3modal/react';


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Leaderboard', href: '#', current: false },
  { name: 'Mint POAP', href: '#', current: false },
  { name: 'Project Info', href: '#', current: false },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ children }: any) {
  return (
    <>
      <div className='min-h-full'>
        <div className='bg-gray-800 pb-32'>
          <Disclosure as='nav' className='bg-gray-800'>
            {({ open }) => (
              <>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                  <div className='border-b border-gray-800'>
                    <div className='flex h-16 items-center justify-between px-4 sm:px-0'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                          <img className='h-8 w-8' src='/book.png' alt='book' />
                        </div>
                        <div className='hidden md:block'>
                          <div className='ml-10 flex items-baseline space-x-4'>
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={
                                  item.current ? 'page' : undefined
                                }>
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='md:block ml-4 flex items-center'>
                        {/* Profile dropdown */}
                        <div>
                          <Web3Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
          <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold tracking-tight text-white'>
                neo-neo-noir, Round 1: The Cleansing of Lanny
              </h1>
            </div>
          </header>
        </div>

        {/* Controls the window container */}
        <main className='-mt-32'>
          <div className='mx-auto max-w-7xl'>
            <div className='rounded-lg bg-[#0f0f0f] px-2 py-2 shadow sm:px-2 grid mx-4'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
