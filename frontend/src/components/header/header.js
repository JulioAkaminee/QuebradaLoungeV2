import '../../styles/componentes/header.css'
import Image from 'next/image';

export default function Header() {
    return (
        <>
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
                        <li className="navItem">Home</li>
                        <li className="navItem">Produtos</li>
                        <li className="navItem">Nos Conheça</li>
                        <li className="navItem">Fale Conosco</li>
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
                
                </header>
            </div>
        </>
    );
}
