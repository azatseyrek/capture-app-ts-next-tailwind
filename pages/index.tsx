import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import {SliderData} from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Capture</title>
        <link rel="icon" href="/photo.png" />
        <meta name="description" content="Capture your moments" />
      </Head>
      <Hero
        heading="Capture Photography"
        message="I capture moment in nature and keep them alive."
      />
      <Slider slides={SliderData} />
    </div>
  );
}
