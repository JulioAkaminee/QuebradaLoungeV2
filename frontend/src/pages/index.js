import Header from '../components/header/header'
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <div className='mainPage'>
     <Head>
     <title>Quebrada Lounge - Página Inicial</title>
     </Head>
      <Header />
    {/* Seção do banner */}
    <motion.section className='sectionBanner'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2.5, ease: [0.25, 0.8, 0.25, 1]}}
    >
    <motion.h1
  className="titleBannerJackDaniels"
  initial={{ opacity: 0, y: 20, transform: 'translate(-50%, -40%)' }} 
  animate={{ opacity: 1, y: 0, transform: 'translate(-50%, -50%)' }}    
  transition={{
    duration: 1, 
    delay: 0.5,
    ease: [0.25, 0.8, 0.25, 1], 
  }}
>
  <span className='titleBannerStart'>Do quebrada direto pra quebrada: </span>bebidas pra todos os momentos.
</motion.h1>

<motion.button 
  className='btnVerPromoções'
  initial={{ opacity: 0, y: 20, transform: 'translate(-50%, -30%)' }} 
  animate={{ opacity: 1, y: 0, transform: 'translate(-50%, -50%)' }}    
  transition={{
    duration: 1, 
    delay: 1,  
    ease: [0.25, 0.8, 0.25, 1], 
  }}
>
  Ver Promoções
</motion.button>
</motion.section>

  <section>
    
  </section>
     
    </div>
  );
}
