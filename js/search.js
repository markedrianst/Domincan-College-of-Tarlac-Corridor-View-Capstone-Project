/**
 * Search Module
 * Handles the search functionality with auto-suggestions
 */

class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.debounceTimeout = null;
        this.debounceDelay = 300; // milliseconds
        
        this.setupEventListeners();
    }
    
    /**
     * Set up event listeners for search functionality
     */
    setupEventListeners() {
        // Input event for live search
        this.searchInput.addEventListener('input', () => {
            // Clear previous timeout
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            
            // Set new timeout for debouncing
            this.debounceTimeout = setTimeout(() => {
                this.performSearch();
            }, this.debounceDelay);
        });
        
        // Focus event to show results if input has value
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim() !== '') {
                this.performSearch();
            }
        });
        
        // Click outside to close results
        document.addEventListener('click', (event) => {
            if (!this.searchInput.contains(event.target) && !this.searchResults.contains(event.target)) {
                this.hideResults();
            }
        });
        
        // Prevent clicks within results from closing
        this.searchResults.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
    
    /**
     * Perform search based on input value
     */
    performSearch() {
        const searchTerm = this.searchInput.value.trim();
        
        if (searchTerm === '') {
            this.hideResults();
            return;
        }
        
        // Get search results
        const results = searchPanoramas(searchTerm);
        
        // Display results
        this.displayResults(results);
    }
    
    /**
     * Display search results
     * @param {Array} results - Array of panorama objects matching the search
     */
    displayResults(results) {
        // Clear previous results
        this.searchResults.innerHTML = '';
        
        if (results.length === 0) {
            // No results found
            const noResults = document.createElement('div');
            noResults.className = 'search-result-item';
            noResults.textContent = 'No locations found';
            this.searchResults.appendChild(noResults);
        } else {
            // Create result items
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                
                // Create name element
                const nameElement = document.createElement('div');
                nameElement.className = 'result-name';
                nameElement.textContent = result.name;
                
                // Create description element
                const descElement = document.createElement('div');
                descElement.className = 'result-description';
                descElement.textContent = result.description;
                
                // Add elements to result item
                resultItem.appendChild(nameElement);
                resultItem.appendChild(descElement);
                
                // Add click event to navigate to the panorama
                resultItem.addEventListener('click', () => {
                    this.navigateToPanorama(result.id);
                });
                
                this.searchResults.appendChild(resultItem);
            });
        }
        
        // Show results container
        this.searchResults.style.display = 'block';
    }
    
    /**
     * Hide search results
     */
    hideResults() {
        this.searchResults.style.display = 'none';
    }
    
    /**
     * Navigate to a panorama
     * @param {string} panoramaId - The ID of the panorama to navigate to
     */
    navigateToPanorama(panoramaId) {
        if (window.panoramaViewer) {
            window.panoramaViewer.loadPanorama(panoramaId);
            this.hideResults();
            this.searchInput.value = '';
        }
    }
}

// Export the search manager for use in other modules
window.searchManager = null;