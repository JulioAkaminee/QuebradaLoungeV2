import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';
import Styles from '@/styles/componentes/cardProdutoCarrossel.module.css';

export default function CardProdutosCarrossel() {
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: { perView: 4, spacing: 10 },
        breakpoints: {
            "(max-width: 1050px)": {
                slides: { perView: 3, spacing: 10 },
            },
            "(max-width: 768px)": {
                slides: { perView: 2, spacing: 8 },
            },
            "(max-width: 550px)": {
                slides: { perView: 1, spacing: 5 },
            },
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
    });

    const produtoClicado = (produto) => {
        alert(`Você Clicou Em ${produto.name} com o valor de ${produto.value}`);
    };

    return (
        <div className={Styles.produtosContainer}>
            {/* Slider */}
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {produtos.map((produto, index) => (
                        <div
                            key={index}
                            className={`keen-slider__slide ${Styles.cardProdutoContainer}`}
                            onClick={() => produtoClicado(produto)}
                        >
                            <div className={Styles.containerImageProduct}>
                                <Image
                                    className={Styles.imageProduct}
                                    src={produto.image}
                                    width={180}
                                    height={180}
                                    alt={produto.name}
                                />
                            </div>
                            <h1 className={Styles.valueProduct}>
                                <span className={Styles.cifraoProduct}>R$ </span>{produto.value.toFixed(2)}
                            </h1>
                            <h2 className={Styles.nameProduct}>{produto.name}</h2>
                            {produto.isAdult && (
                                <p className={Styles.adultAlert}>Produto para maiores de 18 anos</p>
                            )}
                            <div className={Styles.buttonContainer}>
                                <button className={Styles.btnAddToCartCarrossel}>Adicionar ao carrinho</button>
                                <button className={Styles.btnBuyCarrossel}>Comprar</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botões de navegação */}
                <button
                    className={`${Styles.arrow} ${Styles.arrowLeft}`}
                    onClick={() => instanceRef.current?.prev()}
                >
                    &#8592;
                </button>
                <button
                    className={`${Styles.arrow} ${Styles.arrowRight}`}
                    onClick={() => instanceRef.current?.next()}
                >
                    &#8594;
                </button>
            </div>

            {/* Dots */}
            <div className={Styles.dots}>
                {Array.from({ length: produtos.length }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`${Styles.dot} ${currentSlide === idx ? Styles.activeDot : ""}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
