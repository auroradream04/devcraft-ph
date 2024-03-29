'use client';
import Link from 'next/link';
import type { BtnProps } from './definition';

export function Button({
  title,
  btnStyles = 'rounded-full block bg-gray-500 px-4 py-2 font-bold capitalize text-white',

  elTag = 'btnTag',
  path,
  type,
}: BtnProps) {
  if (elTag === 'linkTag') {
    return (
      <Link href={path} className={btnStyles}>
        {title}
      </Link>
    );
  }

  return <button className={btnStyles}>{title}</button>;
}
