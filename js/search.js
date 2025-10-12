class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.debounceTimeout = null;
        this.debounceDelay = 300;
        this.activeCategory = "";

        // Category destinations
        this.categoryDestinations = {
            'SD bldg.': 'SdGroundfloor10',
            'SCS bldg.': 'scs1st4', 
            'OLF bldg.': 'olf_stair_1_2_1',
            'HR bldg.': 'cbaoffice1',
            'SN bldg.': 'sn1st1',
            'SLR bldg.': 'slr1st4',
            'OLP bldg.': 'pOLP1stFloor'
        };

        // PRIORITY ORDER: Define which categories show FIRST
        this.categoryPriority = {
            'SD bldg.': 1,      // Highest priority - shows first
            'SCS bldg.': 2,     // High priority
            'OLF bldg.': 3,      // Medium priority
            'HR bldg.': 4,      // Medium priority
            'SN bldg.': 5,     // Lower priority
            'SLR bldg.': 6,     // Lower priority
            'OLP bldg.': 7      // Lowest priority - shows last
        };

        this.setupEventListeners();
        this.populateCategories();
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', () => {
            if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => this.performSearch(), this.debounceDelay);
        });

        this.searchInput.addEventListener('focus', () => {
            this.performSearch();
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

    populateCategories() {
        const categoryBar = document.getElementById('category-bar');
        if (!categoryBar) return;

        // DEBUG: Log all categories found
        const categories = [...new Set(
            panoramaData.flatMap(p => Array.isArray(p.category) ? p.category : [p.category])
        )].sort();
        
        console.log('Found categories:', categories);

        // Always add "All" first
        const allBtn = this.createCategoryButton("All", "");
        categoryBar.appendChild(allBtn);

        // SORT CATEGORIES BY PRIORITY
        const sortedCategories = categories.sort((a, b) => {
            const priorityA = this.categoryPriority[a] || 999; // Default low priority
            const priorityB = this.categoryPriority[b] || 999;
            return priorityA - priorityB; // Lower number = higher priority
        });

        console.log('Categories in priority order:', sortedCategories);

        // Add categories in PRIORITY ORDER
        sortedCategories.forEach(cat => {
            const btn = this.createCategoryButton(
                cat.charAt(0).toUpperCase() + cat.slice(1),
                cat
            );
            
            // Add visual indicator for high priority categories
            const priority = this.categoryPriority[cat];
            if (priority <= 3) { // Priority 1-3 get special styling
                btn.classList.add('priority-category');
                btn.title = 'Main building';
            }
            
            categoryBar.appendChild(btn);
        });

        allBtn.classList.add("active");
    }

        createCategoryButton(label, value) {
            const btn = document.createElement("button");
            btn.className = "category-btn";
            btn.textContent = label;
            btn.addEventListener("click", () => {
                console.log('Category clicked:', value);
                
                // Keep "All" visually active
                document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
                const allBtn = document.querySelector(".category-btn:first-child"); // Assuming "All" is first
                if (allBtn) allBtn.classList.add("active");

                // Do NOT set activeCategory — keep it empty so search shows all
                this.activeCategory = "";

                // Teleport to the category's destination
                this.teleportToCategory(value);

                // Perform search (will show everything since activeCategory = "")
                this.performSearch();
            });

            return btn;
        }

    /**
     * Teleport to specific location for category
     */
    teleportToCategory(category) {
        if (!category) {
            console.log('No category selected');
            return;
        }
        
        console.log('Teleporting for category:', category);
        
        const destinationId = this.categoryDestinations[category];
        console.log('Destination ID from mapping:', destinationId);
        
        if (destinationId) {
            const destinationPanorama = getPanoramaById(destinationId);
            console.log('Found panorama:', destinationPanorama);
            
            if (destinationPanorama) {
                // Cancel any active navigation
                if (window.navigationPath) {
                    cancelNavigation();
                }
                
                // Teleport directly to specific location
                if (window.panoramaViewer) {
                    console.log('Starting teleport to:', destinationId);
                    
                    if (window.transitionManager) {
                        window.transitionManager.startTransition(
                            window.panoramaViewer.currentPanoramaId, 
                            destinationId
                        );
                    } else {
                        window.panoramaViewer.loadPanorama(destinationId);
                    }
                } else {
                    console.error('panoramaViewer not found');
                }
            } else {
                console.error('Panorama not found with ID:', destinationId);
                // Try to find any panorama in this category
                this.fallbackToFirstInCategory(category);
            }
        } else {
            console.error('No destination mapped for category:', category);
            this.fallbackToFirstInCategory(category);
        }
    }

    /**
     * Fallback: Use first panorama in category
     */
    fallbackToFirstInCategory(category) {
        console.log('Trying fallback for category:', category);
        const categoryPanoramas = panoramaData.filter(p => {
            const cats = Array.isArray(p.category) ? p.category : [p.category];
            return cats.includes(category);
        });
        
        console.log('Found panoramas in category:', categoryPanoramas);
        
        if (categoryPanoramas.length > 0) {
            const firstPanorama = categoryPanoramas[0];
            console.log('Using fallback panorama:', firstPanorama.id);
            
            if (window.panoramaViewer) {
                if (window.transitionManager) {
                    window.transitionManager.startTransition(
                        window.panoramaViewer.currentPanoramaId, 
                        firstPanorama.id
                    );
                } else {
                    window.panoramaViewer.loadPanorama(firstPanorama.id);
                }
            }
        } else {
            console.error('No panoramas found in category:', category);
        }
    }

   performSearch() {
    const searchTerm = this.searchInput.value.trim();
    const category = this.activeCategory;

    if (category === "" && searchTerm === "") {
        this.searchResults.innerHTML = "";
        this.hideResults();
        return;
    }

    let results = [];

    if (searchTerm === "") {
        results = category
            ? panoramaData.filter(p => {
                const cats = Array.isArray(p.category) ? p.category : [p.category];
                return cats.includes(category);
            })
            : [];
    } else {
        results = searchPanoramas(searchTerm);

        if (category) {
            results = results.filter(p => {
                const cats = Array.isArray(p.category) ? p.category : [p.category];
                return cats.includes(category);
            });
        }
    }

    this.displayResults(results);
}

    displayResults(results) {
        this.searchResults.innerHTML = '';

        if (this.activeCategory) {
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'results-category-header';
            categoryHeader.textContent = `Showing: ${this.activeCategory}`;
            this.searchResults.appendChild(categoryHeader);
        }

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
                    this.searchInput.blur();
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
            startUserNavigation(panoramaId);
            this.hideResults();
            this.searchInput.value = '';
        }
    }
}

window.searchManager = null;