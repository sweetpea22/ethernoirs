// yes
import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function FourtyTwo() {
  const choiceOptions: GameMove[] = [
    { name: 'Accept the tip and spread the rumor.', to: '/4' },
    { name: 'Put some $ on it.', to: '/3' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/guy-3.png'
        characterName='42'
        dialogue={
          "You touch down in Kernel City, it's a dump. First you meet the Lanny protocol VC, his name is Max Payne. You lie and tell him that you're investigating a specific address for laundering. He says he's headed to a UFC fight and tosses you a tip to bet on Zach."
        }
      />
    </Dashboard>
  );
}
