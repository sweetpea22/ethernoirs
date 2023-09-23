import Dashboard from '@/components/Dashboard';
import GameInterface from '@/components/GameInterface';

export interface GameMove {
  name: string;
  to: string;
  number?: number;
}

const TotalGameMoves = [
  {
    id: 0,
    address: 'A',
    moves: [1, 2, 3, 4, 6],
  },
  {
    id: 1,
    address: 'B',
    moves: [1, 2, 3, 4, 6],
  },
];

// how to get a players moves
console.log(TotalGameMoves[0].moves);

export default function Sixty() {
  return <h1>hello from test</h1>;
}
