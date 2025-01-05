import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const [menuAberto, SetMenuAberto] = useState(false);
    const [clickFora, SetClickFora] = useState(false);
    const router = useRouter();

    // Função que manipula o menu mobile
    const abrirMenu = () => {
        SetMenuAberto(!menuAberto);
        SetClickFora(!clickFora);

    
        setTimeout(() => {
            document.querySelector('.navItemMobileHome').style.paddingLeft = "35px";
            setTimeout(() => {
                document.querySelector('.navItemMobileProducts').style.paddingLeft = "35px";
            }, 300);
            setTimeout(() => {
                document.querySelector('.navItemMobileAbout').style.paddingLeft = "35px";
            }, 450);
            setTimeout(() => {
                document.querySelector('.navItemMobileTalktous').style.paddingLeft = "35px";
            }, 600);

             setTimeout(() => {
                const btnEntrarMobile = document.querySelector('.btnEntrarMobile')
                btnEntrarMobile.style.opacity = "1"
                btnEntrarMobile.style.marginLeft = "0"

            }, 700);

            document.querySelector('.clickFora').style.transition = 'opacity 700ms ease';
            document.querySelector('.clickFora').style.opacity = 1;
        }, 100);

        // Controlando o scroll do body
        if (!menuAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Função que fecha o menu
    const fecharMenu = () => {
        setTimeout(() => {
            SetMenuAberto(!menuAberto);
            SetClickFora(!clickFora);
            document.querySelector('.navMobile.menuAberto').style.right = "0";
            document.querySelector('.navItemMobileHome').style.paddingLeft = "600px";
            document.querySelector('.navItemMobileProducts').style.paddingLeft = "600px";
            document.querySelector('.navItemMobileAbout').style.paddingLeft = "600px";
            document.querySelector('.navItemMobileTalktous').style.paddingLeft = "600px";
            document.querySelector('.clickFora').style.opacity = 0;
            document.querySelector('.btnEntrarMobile').style.opacity = 0;
            document.querySelector('.btnEntrarMobile').style.marginLeft = "600px";
        }, 700);

        document.querySelector('.navMobile.menuAberto').style.transition = "850ms ease";
        document.querySelector('.navMobile.menuAberto').style.right = "-600px";

        document.querySelector('.clickFora').style.transition = 'opacity 700ms ease';
        document.querySelector('.clickFora').style.opacity = 0;
    };

    useEffect(() => {
        // Verificar se está no cliente para evitar erros
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const headerDesktop = document.querySelector(".headerDesktop");
                if (headerDesktop) {
                    headerDesktop.style.transition = "500ms ease";
                    headerDesktop.style.marginTop = "20px";
                }
                
                setTimeout(() => {
                    const logo = document.querySelector('.logoQuebrada')
                    logo.style.marginTop = "0"
                    logo.style.opacity = "1"
                }, 300);

                setTimeout(() => {
                    const navItemDesktopHome = document.querySelector('.navItemDesktopHome');
                    if (navItemDesktopHome) {
                        navItemDesktopHome.style.marginTop = "0";
                        navItemDesktopHome.style.opacity = "1";
                    }
                }, 350);

                setTimeout(() => {
                    const navItemDesktopProducts = document.querySelector('.navItemDesktopProducts');
                    if (navItemDesktopProducts) {
                        navItemDesktopProducts.style.marginTop = "0";
                        navItemDesktopProducts.style.opacity = "1";
                    }
                }, 450);

                setTimeout(() => {
                    const navItemDesktopAbout = document.querySelector('.navItemDesktopAbout');
                    if (navItemDesktopAbout) {
                        navItemDesktopAbout.style.marginTop = "0";
                        navItemDesktopAbout.style.opacity = "1";
                    }
                }, 600);

                setTimeout(() => {
                    const navItemDesktopTalktous = document.querySelector('.navItemDesktopTalktous');
                    if (navItemDesktopTalktous) {
                        navItemDesktopTalktous.style.marginTop = "0";
                        navItemDesktopTalktous.style.opacity = "1";
                    }
                }, 750);
                
               

                //Animação input de pesquisa
                setTimeout(() => {
                  const inputPesquisa = document.querySelector('.containerInputPesquisa');
                   inputPesquisa.style.marginTop = '0'
                   inputPesquisa.style.opacity = '1'
                                
                }, 1000);

                //Animação botão de entrar Desktop
                setTimeout(() => {
                    const btnEntrarDesktop = document.querySelector('.linkbtnEntrarDesktop')
                    btnEntrarDesktop.style.marginTop = "0px"
                    btnEntrarDesktop.style.opacity = "1"
                }, 1200);

                setTimeout(() => {
                    const carrinhoImage = document.querySelector('.carrinhoImage')
                    carrinhoImage.style.marginTop = "10px"
                    carrinhoImage.style.opacity = "1"
                }, 1400);
                
            }, 600);
        }
    }, []); 

    return (
        <>
            <div className='containerMenuMobile'>
                <nav className={`navMobile ${menuAberto ? 'menuAberto' : ''}`}>
                    <ul className="navListMobile">
                        <Link href={"/"}>
                        <Image
                            src={'/assets/icons/menu_close.png'}
                            width={35}
                            height={35}
                            className='menuClose'
                            onClick={fecharMenu}
                            alt='icone para fechar o menu'
                        />
                        </Link>
                        <h1 className='textMenu'>Menu</h1>
                        <div className='containerNavigation'>
                            <Link
                                href="/"
                                className={`navItemMobile navItemMobileHome ${router.pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className={`navItemMobile navItemMobileProducts ${router.pathname === '/products' ? 'active' : ''}`}
                            >
                                Produtos
                            </Link>
                            <Link
                                href="/about"
                                className={`navItemMobile navItemMobileAbout ${router.pathname === '/about' ? 'active' : ''}`}
                            >
                                Nos Conheça
                            </Link>
                            <Link
                                href="/talktous"
                                className={`navItemMobile navItemMobileTalktous ${router.pathname === '/talktous' ? 'active' : ''}`}
                            >
                                Fale Conosco
                            </Link>
                        </div>
                        <Link href={"/login"} className='linkBtnEntrarMobile'><button className='btnEntrarMobile'>Entrar</button></Link>
                    </ul>
                </nav>
                <div className={clickFora ? 'clickFora' : 'clickForaOff'} onClick={fecharMenu}></div>
            </div>

            <div className='containerHeader'>
                <header className='headerDesktop'>
                    <Image
                        src={'/assets/logo-quebrada.png'}
                        width={65}
                        height={65}
                        className='logoQuebrada'
                        alt='logoPrincipal'
                        priority
                    />
                    <nav>
                        <ul className="navList">
                            <Link className="navItem navItemDesktopHome" href={"/"}>Home</Link>
                            <Link className="navItem navItemDesktopProducts" href={"/products"}>Produtos</Link>
                            <Link className="navItem navItemDesktopAbout" href={"/about"}>Nos Conheça</Link>
                            <Link className="navItem navItemDesktopTalktous" href={"/talktous"}>Fale Conosco</Link>
                        </ul>
                    </nav>

                    <div className='containerLogin'>
                        <div className='containerInputPesquisa'>
                            <input type="search" name="inputPesquisa" id="inputPesquisa" placeholder='Pesquisar...' />
                            <Image
                                className='searchImage'
                                src={'/assets/icons/search.png'}
                                width={24}
                                height={24}
                                alt='icone de busca'
                            />
                        </div>
                        <Link href={"/login"} className='linkbtnEntrarDesktop'><button className='btnEntrarDesktop' >Entrar</button></Link>
                        <Image
                            className='carrinhoImage'
                            src={'/assets/icons/shopping_cart.png'}
                            width={32}
                            height={32}
                            alt='icone de carrinho de compras'
                        />
                    </div>

                    <Image
                        className='menuBurguer'
                        src={'/assets/icons/menuBurguer.png'}
                        width={32}
                        height={32}
                        onClick={abrirMenu}
                        alt='icone de menu'
                    />
                </header>
            </div>
        </>
    );
}
