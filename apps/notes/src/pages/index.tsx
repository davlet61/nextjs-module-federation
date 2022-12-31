import { useCount, useVisibility } from 'lib';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button, Radio } from 'ui';

import { Home, Modal } from '../components';

// const Navbar = dynamic(() => import('skeleton/comps').then((mod) => mod.Navbar));
// const Footer = dynamic(() => import('skeleton/comps').then((mod) => mod.Footer));
const Navbar = dynamic(() => import('skeleton/Navbar'), { ssr: process.env.NODE_ENV !== 'development' });

export default function Index() {
  const { toggleVisibility } = useVisibility((state) => state);
  const { count, increment } = useCount();

  return (
    <div className="h-screen">
      <Suspense fallback="Loading..">
        <Navbar />
      </Suspense>
      <Home />
      <Button onClick={toggleVisibility}>Click</Button>
      <Modal />
      <Radio label="Plans" />
      <div>Count: {count}</div>
      <button onClick={increment} className="rounded bg-indigo-800 py-2 px-4 font-bold text-white">
        Add To Cart
      </button>
      {/* <Suspense fallback="Loading..">
        <Footer />
      </Suspense> */}
    </div>
  );
}

Index.getInitialProps = async () => {
  return {};
};
