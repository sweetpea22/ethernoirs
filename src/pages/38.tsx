import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function ThirtyEight() {
  const choiceOptions: GameMove[] = [{ name: 'Record that', to: '/72' }];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/biddy.png'
        characterName='Biddy'
        dialogue={
          'Someone lets you inside the house and he was shot, you turn around and blast who shot him. You pull the injured man to safety. His name is Biddy, he operates the exchange in town. He thanks you for saving him and doxxes Thaler to you.  He says his name is Macswain.'
        }
      />
    </Dashboard>
  );
}
