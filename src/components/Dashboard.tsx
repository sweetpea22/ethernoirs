'use client';
import { shortenAddress } from '@/sdks/axiomConfig';
import { Disclosure } from '@headlessui/react';
// import { Web3Button } from '@web3modal/react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';


const navigation = [
  { name: 'Leaderboard', href: '#', current: false },
  { name: 'Mint POAP', href: '#', current: false },
  { name: 'Project Info', href: '#', current: false },
  { name: 'Reset', href: '/', current: true },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ children}: any) {
  const { open: openWallet } = useWeb3Modal();
  const { address, isConnected, isDisconnected } = useAccount();
  const truncatedAddress = `${address?.slice(0,5)}...${address?.slice(37, -1)}`
  return (
    <>
      <div className='min-h-full pb-20'>
        <div className='bg-[#2a2a2a] pb-32'>
          <Disclosure as='nav' className='bg-[#0f0f0f]'>
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
                                    ? 'bg-slate-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700',
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

                          {(isDisconnected) && (<button className='rounded-lg bg-slate-700 text-white py-4 px-4 text-lg  hover:brightness-50 font-medium' onClick={() => openWallet()}>Connect Wallet</button>)}
                        </div>
                          <div>
                          {isConnected && (<button className='rounded-lg bg-slate-700 text-white hover:brightness-50 py-4 px-4 text-lg font-medium' onClick={() => openWallet()}>{truncatedAddress || "Loading address.."}</button>)}
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
                Ethernoir, Round 1: The Cleansing of Lanny
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
