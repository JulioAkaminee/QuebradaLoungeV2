import Header from '../components/header/header'
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CardProdutos from '@/components/cardProdutos/cardProduto';
import Location from '@/components/localização/location';
import Link from 'next/link';
import CardProdutosCarrossel from '@/components/cardProdutos/cardProdutosCarrossel';
import Footer from '@/components/footer/footer';


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

   
  <section className='promotionProducts'>
    <div className='containerCard'>
    <motion.h1  initial={{ opacity: 0, y: 20, }} 
  animate={{ opacity: 1, y: 0 }}    
  transition={{
    duration: 1, 
    delay: 1.3,  
    ease: [0.25, 0.8, 0.25, 1], 
  }} className='titlePromotion'>Promoções da Semana</motion.h1>
    <motion.div  className='containerBtnShowAllProducts' initial={{ opacity: 0, y: 20, }} 
  animate={{ opacity: 1, y: 0 }}    
  transition={{
    duration: 1, 
    delay: 1.8,  
    ease: [0.25, 0.8, 0.25, 1], 
  }}>
      <Link href={'/products'} className='btnShowAllProducts'>Ver Todos Produtos</Link>
      </motion.div>
      <motion.div className='products' initial={{ opacity: 0, y: 20, }} 
  animate={{ opacity: 1, y: 0 }}    
  transition={{
    duration: 1, 
    delay: 1.8,  
    ease: [0.25, 0.8, 0.25, 1], 
  }}>
        <CardProdutosCarrossel className="productsIndex"/>
        </motion.div>
      </div>
 
    
  </section>
  <motion.div initial={{ opacity: 0, y: 20, }} 
  animate={{ opacity: 1, y: 0 }}    
  transition={{
    duration: 1, 
    delay: 1.8,  
    ease: [0.25, 0.8, 0.25, 1], 
  }} className='containerMapa'><Location/></motion.div>
     
     <Footer/>
    </div>
  );
}
