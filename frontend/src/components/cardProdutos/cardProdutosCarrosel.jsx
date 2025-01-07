import Slider from 'react-slick';
import Image from 'next/image';
import Styles from '@/styles/componentes/cardProdutoCarrosel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function CardProdutosCarrosel() {
    const produtos = [
        {
            name: "Cerveja Skol 269ml",
            value: 2.69,
            image: "/assets/products/cervejaSkol269ml.png",
            isAdult: true
        },
        {
            name: "Refrigerante Coca-Cola 2L",
            value: 7.99,
            image: "/assets/products/cocaCola2L.png",
            isAdult: false
        },
        {
            name: "Vodka Absolut 700ml",
            value: 89.90,
            image: "/assets/products/absolut700ml.png",
            isAdult: true
        },
        {
            name: "Água Mineral 500ml",
            value: 1.60,
            image: "/assets/products/aguaMineral500ml.png",
            isAdult: false
        },
        {
            name: "Refrigerante Guaraná Antarctica Lata 350ml",
            value: 3.50,
            image: "/assets/products/guarana_350.png",
            isAdult: false
        }
    ];

    const produtoClicado = (produto) => {
        alert(`Você Clicou Em ${produto.name} com o valor de ${produto.value}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={Styles.produtosContainer}>
            <Slider {...settings}>
                {produtos.map((produto, index) => (
                    <div className={Styles.cardProdutoContainer} onClick={() => produtoClicado(produto)} key={index}>
                        <div className={Styles.containerImageProduct}>
                            <Image className={Styles.imageProduct} src={produto.image} width={180} height={180} alt={produto.name} />
                        </div>
                        <h1 className={Styles.valueProduct}>
                            <span className={Styles.cifraoProduct}>R$ </span>{produto.value.toFixed(2)}
                        </h1>
                        <h2 className={Styles.nameProduct}>{produto.name}</h2>
                        {produto.isAdult && <p className={Styles.adultAlert}>Produto para maiores de 18 anos</p>}

                        <div>
                            <button className={Styles.btnAddToCart}>Adicionar ao carrinho</button>
                            <button className={Styles.btnBuy}>Comprar</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
