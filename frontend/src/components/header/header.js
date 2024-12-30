import { useState,useRef } from 'react';
import '../../styles/componentes/header.css'
import Image from 'next/image';
import Link from 'next/link'

export default function Header() {
    const [menuAberto,SetMenuAberto] = useState(false);
    const [clickFora,SetClickFora] = useState(false);
    

    const abrirMenu = () =>{
        SetMenuAberto(!menuAberto)
        SetClickFora(!clickFora)
    }


    
    return (
        <>
           <div className='containerMenuMobile'>
                
               <nav  className={`navMobile ${menuAberto ? 'menuAberto' : ''}`}>
                        <ul className="navListMobile">
                                <Link  className="navItemMobile" href={"/"}>Home</Link>
                                <Link className="navItemMobile" href={"/products"}>Produtos</Link>
                                <Link className="navItemMobile" href={"/about"}>Nos Conheça</Link>
                                <Link className="navItemMobile" href={"/talktous"}>Fale Conosco</Link>
                            </ul>
                        </nav>
                        <div className={clickFora ? 'clickFora' : 'clickForaOff'} onClick={abrirMenu}></div>
           </div>
            <div className='containerHeader'>
                <header >
                    <Image
                        src={'/assets/logo-quebrada.png'}
                        width={65}
                        height={65}
                        className='logoQuebrada'
                    />

                    <nav>
                        <ul className="navList">
                        <Link  className="navItem" href={"/"}>Home</Link>
                                <Link className="navItem" href={"/products"}>Produtos</Link>
                                <Link className="navItem" href={"/about"}>Nos Conheça</Link>
                                <Link className="navItem" href={"/talktous"}>Fale Conosco</Link>
                        </ul>

                    </nav>

                   


                    <div className='containerLogin'>
                        <div>
                            <input type="search" name="inputPesquisa" id="inputPesquisa" placeholder='Pesquisar...' />
                            <Image
                                className='searchImage'
                                src={'/assets/icons/search.png'}
                                width={24}
                                height={24}

                            />
                        </div>
                        <button>Entrar</button>
                        <Image
                            className='carrinhoImage'
                            src={'/assets/icons/shopping_cart.png'}
                            width={32}
                            height={32}

                        />
                    </div>
                    <Image
                        className='menuBurguer'
                        src={'/assets/icons/menuBurguer.png'}
                        width={32}
                        height={32}
                        onClick={abrirMenu}
                      
                    />



                </header>
            </div>
          
        </>
    );
}
