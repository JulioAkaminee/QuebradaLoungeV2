import Header from '../components/header/header'
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mainPage'>
     <Head>
     <title>Quebrada Lounge - Página Inicial</title>
     </Head>
      <Header />
    {/* Seção do banner */}
    <section className='sectionBanner'>
  <h1 className='titleBannerJackDaniels'>
    <span className='titleBannerStart'>Na quebrada e para a quebrada: </span>bebidas pra todos os momentos.
  </h1>
  <button className='btnVerPromoções'>Ver Promoções</button>
</section>
     
    </div>
  );
}
