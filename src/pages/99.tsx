import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function NinetyNine() {
  const choiceOptions: GameMove[] = [
    { name: 'Suspect Someone', to: '/740' },
    { name: 'Inspect Proof', to: '/900' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/whisper.png'
        characterName='Whisper'
        dialogue={
          "Thaler tells you he was in the warehouse the same time I heard him yell “Max” and heard shots immediately after. He couldn't make out who ran away."
        }
      />
    </Dashboard>
  );
}
