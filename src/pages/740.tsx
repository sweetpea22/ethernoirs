import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}
// ZKP 1 try
export default function SeventyTwo() {
  const choiceOptions: GameMove[] = [];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/dylan.png'
        characterName='Dylan'
        dialogue={'Show ZKP'}
      />
    </Dashboard>
  );
}
