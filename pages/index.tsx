import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Capture</title>
        <link rel="icon" href="/photo.png" />
        <meta name="description" content="Capture your moments" />
      </Head>
      <h1 className="text-red-600">Hello World</h1>
    </div>
  );
}
