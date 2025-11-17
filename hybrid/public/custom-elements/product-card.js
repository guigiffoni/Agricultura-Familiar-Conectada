customElements.define("product-card", class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.dadosProduto = {
            id: null,
            produtor_id: null,
            nome_produtor: null,
            titulo: null,
            descricao: null,
            preco: null,
            unidade: null,
            imagem_url: null,
            data_criacao: null,
            ativo: null,
        };
    }

    connectedCallback() {
        this.setAttribute('id_prod', this.id);

        let tagImagem = `<div class="image-placeholder">🌱</div>`;
        let precoFormatado = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(this.preco)

        if (this.imagem_url != null) {
            tagImagem = `<img src="${this.imagem_url}">`;
        }

        this.innerHTML = (
            `<div class="product-image">
                ${tagImagem}
            </div>

            <div class="product-info">
                <h3 class="product-name">${this.titulo}</h3>

                <div class="price-section">
                    <span class="price">${precoFormatado}</span>
                    <span class="unit">/${this.unidade}</span>
                </div>

                <p class="description">${this.descricao}</p>

                <div class="seller-info">
                    <span class="seller-label">Vendedor:</span>
                    <a href="placeholder/1234" class="seller-name">${this.nome_produtor}</a>
                </div>

                <button class="add-to-cart-btn">Adicionar ao carrinho</button>
            </div>
            
            <style>
                product-card {
                    border: thin solid;
                    border-radius: 0.5ch;
                    width: 32ch;
                    padding: 3ch 2ch;
                }
                        
                .product-image {
                    width: 100%;
                    aspect-ratio: 3 / 4;
                    border: thin solid;
                }
                        
                .product-image > img {
                    overflow: hidden;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
                        
                .image-placeholder {
                    height: 100%;
                    width: 100%;
                    font-size: 8ch;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0.75;
                }
                        
                .product-name {
                    font-size: 1.25em;
                    font-weight: bold;
                    line-height: 1.25;
                    height: 4ch;
                }
                        
                .price-section {
                    display: flex;
                    align-items: baseline;
                    gap: 0.25ch;
                    margin-bottom: 0.75ch;
                }
                        
                .price {
                    font-size: 1.5em;
                    font-size: bold;
                    color: #2ecc71;
                }
                        
                .unit {
                    font-size: 1em;
                    color: #AAA;
                }
                        
                .description {
                    line-height: 1.4;
                    margin-bottom: 1ch;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    height: 3em;
                }
                        
                .seller-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5ch;
                    margin-bottom: 1ch;
                    padding: 0.5ch 0.75ch;
                    background-color: #EEE;
                    border-radius: 5px;
                    overflow: hidden;
                    text-overflow: clip;
                }
                        
                .seller-label {
                    color: #AAA;
                    font-weight: bold;
                }
                        
                .add-to-cart-btn {
                    width: 100%;
                    padding: 0.75ch 1ch;
                    color: white;
                    border: none;
                    cursor: pointer;
                    background-color: hsl(145 75% 50% / 1);
                    font-size: 1.4em;
                    border-radius: 0.5ch;
                }
            </style>`
        );
    }
})