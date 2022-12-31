import { useCount, useVisibility } from 'lib';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Navbar } from '../components';

const Modal = dynamic(() => import('notes/Modal'), { ssr: process.env.NODE_ENV !== 'development' });

export default function Index() {
  const { visibility } = useVisibility();
  console.log(visibility);
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading..">
        <Modal />
      </Suspense>
    </>
  );
}
