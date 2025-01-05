import Header from '../components/header/header'
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
     <Head>
     <title>Quebrada Lounge - Página Inicial</title>
     </Head>
      <Header />
      <Image className='bannerJackDaniels' src={"/assets/images/bannerJackDaniels.png"} width={1728} height={500}/>
    </>
  );
}
