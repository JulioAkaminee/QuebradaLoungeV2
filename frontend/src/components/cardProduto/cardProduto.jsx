import Image from "next/image";

export default function CardProduto() {
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
            value: 1.50,
            image: "/assets/products/aguaMineral500ml.png",
            isAdult: false
        }
    ];

    return (
        <div className="produtosContainer">
            {produtos.map((produto, index) => (
                <div className="cardProdutoContainer"  key={index}>
                    <div className="containerImageProduct">
                        <Image className="imageProduct" src={produto.image} width={84} height={154} />
                    </div>
                    <h1 className="valueProduct">
                        <span className="cifraoProduct">R$ </span>{produto.value}
                    </h1>
                    <h2 className="nameProduct">{produto.name}</h2>
                    {produto.isAdult && <p className="adultAlert">Produto para maiores de 18 anos</p>}
                    
                    <button className="btnAddToCart">Adicionar ao carrinho</button>
                    <button className="btnBuy">Comprar</button>
                </div>
            ))}
        </div>
    );
}
