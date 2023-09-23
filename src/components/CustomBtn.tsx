/* eslint-disable @next/next/no-img-element */
export default function CustomBtn({
  imageUrl,
  classNames,
  name,
  imgClassNames,
  disabled = false,
}: any) {
  return (
    <button
      disabled={disabled}
      className={`relative flex-col items-center hover:brightness-50 ${classNames}`}>
      {' '}
      <img
        src={imageUrl}
        className={`min-h-[90px] ${imgClassNames}`}
        alt='icon'
      />
      <p className='text-lg text-white'>{name}</p>
    </button>
  );
}
