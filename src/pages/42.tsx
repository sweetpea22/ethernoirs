// yes
import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';
import SceneInterface from '@/components/SceneInterface';

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
      <SceneInterface description="Zach, the tech lead at Lanny was murdered. But the situation is much worse than it initially seemed. Lanny's CTO hired blackouts to hack his own employees when they threatened to leave the protocol. Now those blackouts continue to blackmail the CTO. So he hires you to solve the murder, but you plan to expose the corruption and clean out the protocol." href="/42" />
    </Dashboard>
  );
}
