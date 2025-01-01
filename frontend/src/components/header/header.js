import { useState, useRef } from 'react';
import '../../styles/componentes/header.css'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
    const [menuAberto, SetMenuAberto] = useState(false);
    const [clickFora, SetClickFora] = useState(false);
    

    const router = useRouter();

    const abrirMenu = () => {
        SetMenuAberto(!menuAberto);
        SetClickFora(!clickFora);
    
        if (!menuAberto) {
            document.body.style.overflow = 'hidden'; // Desativa o scroll
        } else {
            document.body.style.overflow = 'auto'; // Restaura o scroll
        }
    };





    return (
        <>
            <div className='containerMenuMobile'>

                <nav className={`navMobile ${menuAberto ? 'menuAberto' : ''}`}>
                    <ul className="navListMobile">
                    <Image
                        src={'/assets/icons/menu_close.png'}
                        width={35}
                        height={35}
                        className='menuClose'
                        onClick={abrirMenu}
                    />
                        <h1 className='textMenu'>Menu</h1>
                        <div className='containerNavigation'>
                            <Link
                                href="/"
                                className={`navItemMobile ${router.pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className={`navItemMobile ${router.pathname === '/products' ? 'active' : ''}`}
                            >
                                Produtos
                            </Link>
                            <Link
                                href="/about"
                                className={`navItemMobile ${router.pathname === '/about' ? 'active' : ''}`}
                            >
                                Nos Conheça
                            </Link>
                            <Link
                                href="/talktous"
                                className={`navItemMobile ${router.pathname === '/talktous' ? 'active' : ''}`}
                            >
                                Fale Conosco
                            </Link>
                        </div>
                        <button className='btnEntrarMobile'>Entrar</button>

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
                            <Link className="navItem" href={"/"}>Home</Link>
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
