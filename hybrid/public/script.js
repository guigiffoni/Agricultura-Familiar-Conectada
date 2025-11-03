JSON.fetch = function (url) {
    return fetch(url).then(x => x.json())
}

JSON.fetch("/api/produtos").then(dados => {
    for (let i in dados) {
        let novoElemento = document.createElement('product-card', { is: 'product-card' });

        for (let chave of Object.keys(dados[i])) {
            novoElemento[chave] = dados[i][chave];
        }

        document.querySelector("#home-products").appendChild(novoElemento);
    }
})