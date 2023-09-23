import Dashboard from '@/components/Dashboard';
import SceneInterface from '@/components/SceneInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function EightyThree() {
  return (
    <Dashboard>
      <SceneInterface
        description='You almost got away, but they got you in the forehead'
        href='/38'
      />
    </Dashboard>
  );
}
