import { useVisibility } from 'lib/hooks/stores';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button, Radio } from 'ui';

import { Home, Modal } from '../components';

const Navbar = dynamic(() => import('skeleton/Navbar'), { suspense: true });

export default async function Index() {
  // const { toggleVisibility } = useVisibility((state) => state);
  return (
    <main className="">
      <Suspense fallback="Loading..">
        <Navbar />
      </Suspense>
      <Home />
      {/* <Button onClick={toggleVisibility}>Click</Button> */}
      <Modal />
      <Radio label="Plans" />
    </main>
  );
}
