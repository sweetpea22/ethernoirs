import React, { useState, useEffect } from 'react';
import {useAccount, useNetwork, useContractWrite, usePrepareContractWrite } from 'wagmi';

const CONTRACT_ADDR = "0x5ADC69669cFF2B9E6ffE56a3A8EFD31106203354";
const CONTRACT_NETWORK = "11155111";



const ZKExample: React.FC = () => {
    const [response, setResponse] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState<any | null>(null);
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        // componentDidMount logic here
    }, []);

  const prove = async () => {

        try {
          let signals: any = {
             //@ts-ignore
              
                a: parseInt(a),
            //@ts-ignore
                
                b: parseInt(b)
            };

            let output = [signals["a"] * signals["b"]];

          const { proof, publicSignals } =
            //@ts-ignore
            await window.snarkjs.groth16.fullProve(signals, "/assets/product.wasm", "/assets/product_0001.zkey");

            console.log(JSON.stringify(proof, null, 1));

            let a = proof.pi_a.slice(0, 2);
            let b = [proof.pi_b[0].reverse(), proof.pi_b[1].reverse()];
            let c = proof.pi_c.slice(0, 2);

            console.log(`${JSON.stringify(a)},\n${JSON.stringify(b)},\n${JSON.stringify(c)},\n${JSON.stringify(output)}`);

            c.methods.doProof(
                a,
                b,
                c,
                output
            ).send({ from: address }).then((r:any) => {
                setResponse(JSON.stringify(r, null, 2));
                console.log(JSON.stringify(r, null, 2));
            });
        } catch (e) {
            console.error(`prove error ${e}`);
        }
    }



  // uses Prepare contract Write
    // const initContract = async () => {
    //     if (web3) {
    //         const newC = new web3.eth.Contract(abi, CONTRACT_ADDR);
    //         setC(newC);

    //         const accounts = await web3.eth.requestAccounts();
    //         const addr = accounts[0];
    //         if (addr) {
    //             setAddress(addr);
    //         }
    //     }
    // }

    return (
      <>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Input A 
        </label>
        <input
          type="number"
          name="Input A"
          id="A"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              //@ts-ignore
            value={(e: any) => setB(e.target.value)}
            onKeyUp={(e: any) => setB(e.target.value)}
          placeholder="0123"
        />
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="Input B" className="block text-xs font-medium text-gray-900">
            Input B
        </label>
        <input
          type="number"
          name="b"
            id="b"
            //@ts-ignore
            value={(e: any) => setB(e.target.value)}
            onKeyUp={(e: any) => setB(e.target.value)}
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="0123"
        />
        </div>
        <button
                type='button'
                onClick={(e:any) => prove()}
                className='relative inline-flex items-center
              max-w-[80%] rounded-lg bg-red-900 px-8 py-4 my-3 text-xl font-semibold text-gray-200 ring-1 ring-inset ring-red-00 hover:bg-red-800 focus:z-10'>
               Submit Answer (1 try only!)
              </button>
            <div>{response}</div>
        </>
    );
}

export default ZKExample;
