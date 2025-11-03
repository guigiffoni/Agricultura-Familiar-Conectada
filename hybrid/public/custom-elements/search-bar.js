customElements.define("search-bar", class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Pesquisar produtos...">
                <button class="search-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>

            <style>
                search-bar {
                    display: block;
                }

                .search-container {
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    padding: 0.25ch;
                    border: thin solid;
                    border-radius: 3ch;
                }

                .search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    padding: 1ch 1.5ch;
                    font-size: 1em;
                    background: transparent;
                    width: 40ch;
                }

                .search-button {
                    border: none;
                    background: #2ecc71;
                    color: white;
                    border-radius: 50%;
                    width: 3em;
                    height: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
            </style>
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const searchInput = this.querySelector('.search-input');
        const searchButton = this.querySelector('.search-button');

        const executeSearch = () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                this.dispatchEvent(new CustomEvent('search', {
                    detail: { term: searchTerm },
                    bubbles: true
                }));
            }
        };

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                executeSearch();
            }
        });

        searchButton.addEventListener('click', executeSearch);
    }
});