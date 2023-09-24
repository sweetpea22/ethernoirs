import Link from 'next/link';
import SceneDescription from './SceneDescription';
import { largeButtonStyles } from '@/styles/styles';

/* eslint-disable @next/next/no-img-element */
export default function SceneInterface({ description, href }: any) {
  return (
    <div className='py-12 px-6'>
      <SceneDescription description={description} />
      <Link className={`${largeButtonStyles} mt-6 w-[140px]`} href={href}>
        Continue
      </Link>
    </div>
  );
}
