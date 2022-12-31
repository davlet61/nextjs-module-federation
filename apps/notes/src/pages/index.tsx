import { useVisibility } from 'lib';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button, Radio } from 'ui';

import { Home, Modal } from '../components';

const Navbar = dynamic(() => import('skeleton/Navbar'), { ssr: process.env.NODE_ENV !== 'development' });
const Footer = dynamic(() => import('skeleton/Footer'), { ssr: process.env.NODE_ENV !== 'development' });

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

Index.getInitialProps = async () => {
  return {};
};
