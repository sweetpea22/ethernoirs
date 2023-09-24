import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function FourtyTwo() {
  return (
    <Dashboard>
      <GameInterface
        hasContractInteraction
        contractInteractionType=""
        characterImgUrl='/home.png'
        characterName='Gonna be a long night'
        dialogue={
          "The cops tell you to go to Dylan the CTO's house. They wait back while you try to open the door. Suddenly there are shots and they're not coming from the house, the cops are shooting at you. "
        }
      />
    </Dashboard>
  );
}
