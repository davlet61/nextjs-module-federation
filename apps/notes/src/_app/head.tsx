import { revalidate, FlushedChunks, flushChunks } from '@module-federation/nextjs-mf/utils';

export default async function PageHead() {
  const chunks = await flushChunks();
  console.log('🚀 ~ file: head.tsx:5 ~ PageHead ~ chunks', chunks);
  return (
    <>
      <title>Frontend Project</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="robots" content="noindex" />
      <meta key="description" name="description" content="Micro Frontends with NextJS boostrap app" />
    </>
  );
}
