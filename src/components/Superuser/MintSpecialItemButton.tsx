"use client";

import { superuserAddress } from "@/contracts";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import superuser from '@/contracts/superuserAbi.json';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function MintSpecialItemButton(props: any) {
  const { responses } = props;

  // Prepare the sendQuery transaction 
  const { config } = usePrepareContractWrite({
    address: superuserAddress as `0x${string}`,
    abi: superuser.abi,
    functionName: 'mintToMulti',
    args: [responses],
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">
          Special Item Minted!
        </div>
      </div>
    )
  }

  return (
    <button 
      disabled={!write} 
      onClick={() => {
        console.log("Mint Special Item");
        write?.();
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-100 cursor-pointer"
    >
      Mint Special Item
    </button>
  )
}