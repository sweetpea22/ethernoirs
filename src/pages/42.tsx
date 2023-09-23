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
        dialogue={'Hello from 42'}
      />
    </Dashboard>
  );
}
