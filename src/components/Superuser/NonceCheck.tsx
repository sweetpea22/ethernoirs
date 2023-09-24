"use client" 


import { Config, getProof } from "@/sdks/axiomConfig";
import GenerateProof from "./GenerateProof";

interface NonceProps {
  address: string | undefined;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function NonceCheck(props: NonceProps) {
  const { address } = props;

  if (!address) {
    return null;
  }

  const providerUri = process.env.PROVIDER_URI as string;
  const provider = new JsonRpcProvider(providerUri);
  const proof0 = await getProof(provider, address as string, 9743287);
  const proof1 = await getProof(provider, address as string, 9747915);
  const nonce0 = parseInt(proof0?.nonce, 5);
  const nonce1 = parseInt(proof1?.nonce, 5);
  
  if (isNaN(nonce0) || isNaN(nonce1)) {
    return null;
  }

  const nonceDiff = nonce1 - nonce0;

  const canMint = () => {
    return (
      <div className="flex flex-col my-8 gap-2 items-center">
        <div className="text-2xl font-bold">
          Congratulations!
        </div>
        <div>
          You have enough transactions during the bear market to add entropy to the story.
        </div>
        <div>
          <GenerateProof address={address} blockNumbers={[6120000, 10430000]} />
        </div>
      </div>
    )
  }

  const cannotMint = () => {
    return (
      <div>
        Unfortunately, you do not have enough transactions during the bear market to mint a Bearliever NFT.
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-0">
      <div>
        Nonce at Goerli 9743287: {nonce0}
      </div>
      <div>
        Nonce at Goerli 9747915: {nonce1}
      </div>
      <div>
        Nonce difference: {nonceDiff}
      </div>
      {/* { nonceDiff >= Config.NONCE_THRESHOLD ? canMint() : cannotMint() } */}
    </div>
  )
}