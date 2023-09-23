import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Sixty() {
  const choiceOptions: GameMove[] = [
    { name: 'Trust Biddy, record location', to: '/99' },
    { name: "Don't trust, shoot Dylan", to: '/111' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/thaler.png'
        characterName='Thaler'
        dialogue={
          'Dylan smiles and takes you to a cage fight. The fighter is a disgraced protocol founder now fighting to buy his freedom from Dylan. He took you there to threaten you. You see Biddy there. He tells you to go with Thaler for info on the murder.'
        }
      />
    </Dashboard>
  );
}
