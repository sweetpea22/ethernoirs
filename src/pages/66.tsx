import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

export default function Sixty() {
  const choiceOptions: GameMove[] = [
    { name: 'Trust Payne, record location', to: '99' },
    { name: "Don't trust, shoot Dylan", to: '111' },
  ];
  return (
    <Dashboard>
      <GameInterface
        choiceOptions={choiceOptions}
        characterImgUrl='/payne.png'
        characterName='Max Payne'
        dialogue={
          'Dylan smiles and takes you to a cage fight. The fighter is a disgraced protocol founder now fighting to buy his freedom from Dylan. He took you there to threaten you. You meet VC named Max Payne. He urges you to run from Dylan and go with Whisper for info on the murder.'
        }
        hasContractInteraction
        contractInteractionType="mint66"
      />
    </Dashboard>
  );
}
