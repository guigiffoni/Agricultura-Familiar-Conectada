const url = new URL(window.location.href);
const category = url.pathname.split('/').pop();
const searchTerm = url.searchParams.get('q');

if (category != '') {
    url.pathname = '/api/produtos/' + category;

    JSON.fetch(url.toString()).then(populateProductDisplay);
}

if (searchTerm) {
    url.pathname = '/api/produtos/';
    
    JSON.fetch(url.toString()).then(populateProductDisplay);
}

document.querySelector('#apply-price-filter').addEventListener('click', () => {
    const min = document.querySelector('#minimum-price').value;
    const max = document.querySelector('#maximum-price').value;

    
})