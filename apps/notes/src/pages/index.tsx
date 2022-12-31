import { useVisibility } from 'lib/hooks/stores';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button, Radio } from 'ui';

import { Home, Modal } from '../components';

const Navbar = dynamic(() => import('skeleton/comps').then((mod) => mod.Navbar), { ssr: false });
const Footer = dynamic(() => import('skeleton/comps').then((mod) => mod.Footer), { ssr: false });

export default function Index() {
  const { toggleVisibility } = useVisibility((state) => state);
  return (
    <div className="h-screen">
      <Suspense fallback="Loading..">
        <Navbar />
      </Suspense>
      <Home />
      <Button onClick={toggleVisibility}>Click</Button>
      <Modal />
      <Radio label="Plans" />
      <Suspense fallback="Loading..">
        <Footer />
      </Suspense>
    </div>
  );
}
