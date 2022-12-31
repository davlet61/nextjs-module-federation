import { Navbar, NewNoteModal } from 'components';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading..">
        <NewNoteModal />
      </Suspense>
    </>
  );
};

export default HomePage;
