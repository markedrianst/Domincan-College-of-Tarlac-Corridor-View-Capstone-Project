class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.debounceTimeout = null;
        this.debounceDelay = 300;
        this.activeCategory = ""; // store selected category

        this.setupEventListeners();
        this.populateCategories(); // Auto-generate category buttons
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', () => {
            if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => this.performSearch(), this.debounceDelay);
        });

        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim() !== '') this.performSearch();
        });

        document.addEventListener('click', (event) => {
            if (!this.searchInput.contains(event.target) && !this.searchResults.contains(event.target)) {
                this.hideResults();
            }
        });

        this.searchResults.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    /**
     * Build category buttons dynamically from data.js
     */
    populateCategories() {
        const categoryBar = document.getElementById('category-bar');
        if (!categoryBar) return;

        // Flatten unique categories
        const categories = [...new Set(
            panoramaData.flatMap(p => Array.isArray(p.category) ? p.category : [p.category])
        )].sort();

        // Always add "All"
        const allBtn = this.createCategoryButton("All", "");
        categoryBar.appendChild(allBtn);

        categories.forEach(cat => {
            const btn = this.createCategoryButton(
                cat.charAt(0).toUpperCase() + cat.slice(1),
                cat
            );
            categoryBar.appendChild(btn);
        });

        // Default active = All
        allBtn.classList.add("active");
    }

    createCategoryButton(label, value) {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.textContent = label;
        btn.addEventListener("click", () => {
            // update active state
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            this.activeCategory = value;
            this.performSearch();
        });
        return btn;
    }

    performSearch() {
        const searchTerm = this.searchInput.value.trim();
        const category = this.activeCategory;

        if (searchTerm === '' && !category) {
            this.hideResults();
            return;
        }

        let results = searchPanoramas(searchTerm);

        if (category) {
            results = results.filter(p => {
                const cats = Array.isArray(p.category) ? p.category : [p.category];
                return cats.includes(category);
            });
        }

        this.displayResults(results);
    }

    displayResults(results) {
        this.searchResults.innerHTML = '';
        if (results.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'search-result-item';
            noResults.textContent = 'No locations found';
            this.searchResults.appendChild(noResults);
        } else {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';

                const nameElement = document.createElement('div');
                nameElement.className = 'result-name';
                nameElement.textContent = result.name;

                const descElement = document.createElement('div');
                descElement.className = 'result-description';
                descElement.textContent = result.description;

                resultItem.appendChild(nameElement);
                resultItem.appendChild(descElement);

                resultItem.addEventListener('click', () => {
                    this.navigateToPanorama(result.id);
                });

                this.searchResults.appendChild(resultItem);
            });
        }
        this.searchResults.style.display = 'block';
    }

    hideResults() {
        this.searchResults.style.display = 'none';
    }

    navigateToPanorama(panoramaId) {
        if (window.panoramaViewer) {
            window.panoramaViewer.loadPanorama(panoramaId);
            this.hideResults();
            this.searchInput.value = '';
        }
    }
}

window.searchManager = null;
