import '../globals.css';

import { flushChunks } from '@module-federation/nextjs-mf/utils';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-white pt-16 text-black">{children}</body>
    </html>
  );
};

export default RootLayout;
