import Image from "next/image";

export default function CardProdutos() {
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

    const produtoClicado = (produto) =>{
        alert(`Você Clicou Em ${produto.name}
com o valor de ${produto.value}`)
    }

    return (
        <div className="produtosContainer">
            {produtos.map((produto, index) => (
                <div className="cardProdutoContainer" onClick={() => produtoClicado(produto)}  key={index}>
                    <div className="containerImageProduct">
                        <Image className="imageProduct" src={produto.image} width={84} height={154} alt={produto.name} />
                    </div>
                    <h1 className="valueProduct">
                        <span className="cifraoProduct">R$ </span>{produto.value.toFixed(2)}
                    </h1>
                    <h2 className="nameProduct">{produto.name}</h2>
                    {produto.isAdult && <p className="adultAlert">Produto para maiores de 18 anos</p>}
                    
                    <div>
                        <button className="btnAddToCart"  >Adicionar ao carrinho</button>
                        <button className="btnBuy">Comprar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
