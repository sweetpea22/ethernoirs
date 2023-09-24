import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function NinetyNine() {
  const choiceOptions: GameMove[] = [
    { name: 'I know who did it! Proceed to Solve', to: '740' },
    { name: 'Keep the story going - Superuser do', to: 'superuser' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/whisper.png'
        characterName='Whisper'
        dialogue={
          "Whisper tells you he was in the warehouse the same time I heard him yell “Max” and heard shots immediately after. He couldn't make out who ran away."
        }
      />
    </Dashboard>
  );
}
