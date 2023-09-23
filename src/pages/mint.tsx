import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';
import Modal from '@/components/Modal';
import Link from 'next/link';
//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Mint() {
  return (
    <>
      {/* <Dashboard> */}
      <Modal />
      {/* </Dashboard> */}
    </>
  );
}
