/* eslint-disable @next/next/no-img-element */
export default function CustomBtn({
  imageUrl,
  classNames,
  name,
  imgClassNames,
}: any) {
  return (
    <button
      className={`relative flex-col items-center hover:brightness-50 ${classNames}`}>
      {' '}
      <img
        src={imageUrl}
        className={`min-h-[90px] ${imgClassNames}`}
        alt='icon'
      />
      <p className='text-lg text-black'>{name}</p>
    </button>
  );
}
