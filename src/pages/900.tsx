import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}
// 900
export default function NineHundred() {
  const choiceOptions: GameMove[] = [];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/zach.png'
        characterName='The ghost of Zach'
        dialogue={'Last screen '}
      />
    </Dashboard>
  );
}
