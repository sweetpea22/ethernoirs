import Dashboard from '@/components/Dashboard';
import SceneInterface from '@/components/SceneInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function OneEleven() {
  return (
    <Dashboard>
      <SceneInterface
        description='You shot Dylan but at what cost? You barely made it out alive.'
        href='/69'
      />
    </Dashboard>
  );
}
