/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function CustomBtn({
  imageUrl,
  classNames,
  name,
  imgClassNames,
  href = '/',
}: any) {
  return (
    <Link
      href={href}
      as="button"
      className={`relative flex-col items-center hover:brightness-50 ${classNames}`}>
      {' '}
      <img
        src={imageUrl}
        className={`min-h-[90px] ${imgClassNames}`}
        alt='icon'
      />
      <p className='text-lg text-white'>{name}</p>
    </Link>
  );
}
