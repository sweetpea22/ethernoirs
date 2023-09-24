import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function SeventyTwo() {
  const choiceOptions: GameMove[] = [
    { name: 'Agree with him. Probably nothing.', to: '66' },
    { name: "He's sus. Ask him what he knows", to: '55' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/dylan.png'
        characterName='Dylan'
        dialogue={
          'Dylan meets you and apologizes for the wait. He tells you about the murder - Zach was killed because of his own resistance to the fee switch. '
        }
        contractInteractionType="choice729"
        hasContractInteraction
      />
    </Dashboard>
  );
}
