JSON.fetch = function (url) {
    return fetch(url).then(x => x.json())
}

function populateProductDisplay(jsonData) {
    for (let i in jsonData) {
        let novoElemento = document.createElement('product-card', { is: 'product-card' });

        for (let chave of Object.keys(jsonData[i])) {
            novoElemento[chave] = jsonData[i][chave];
        }

        document.querySelector(".product-display").appendChild(novoElemento);
    }
}

document.querySelector('search-bar').addEventListener('search', ev => {
    const url = new URL(window.location.href);

    url.pathname = '/produtos/';
    url.searchParams.set('q', ev.detail.term);

    window.location.href = url.toString();
})
