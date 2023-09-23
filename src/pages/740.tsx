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
        characterName='You may need to open your notebook to solve the riddle'
        dialogue={
          "To prove you solved the riddle, enter the number that corresponds  to the first letter of the color of the killer's in slot 1. Then enter street number he was last seen on. Click the pin icon to enter the answer."
        }
      />
    </Dashboard>
  );
}
