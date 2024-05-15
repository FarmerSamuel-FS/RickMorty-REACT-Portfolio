
import React, { useState, useEffect } from 'react';
import CenteredImage from '../components/CenteredImage';
import backgroundImg from '../assets/background.jpg';
import SearchResultsCard from '../components/SearchResultCard';


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    // Fetch search results when searchQuery or page changes
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSearchResults(data.results);
        setTotalPages(data.info.pages);
        setSearched(true); // Set searched to true after fetching results
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch search results only if searchQuery is not empty
    if (searchQuery.trim() !== '') {
      fetchSearchResults();
    }
  }, [searchQuery, page]); // Add searchQuery and page as dependencies

  // Function to handle search query change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submit
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setPage(1); // Reset page to 1 when performing a new search
  };

  // Function to handle next page button click
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page button click
  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="search-page relative">
      {/* Search bar */}
      <form onSubmit={handleSearchSubmit} className="search-bar-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search for a character..."
          className="search-bar"
        />
      </form>
      
      {/* Display search results only if searched is true */}
      {searched && (
        <div className="search-results-container">
          {searchResults.slice(0, 2).map((result) => (
            <div key={result.id} className="search-result">
              <SearchResultsCard character={result} />
            </div>
          ))}
        
          {/* Pagination buttons */}
          <div className="pagination-buttons">
  {page > 1 && (
    <button onClick={handlePreviousPage} className="pagination-button prev-page-button">
      Previous
    </button>
  )}
  {page < totalPages && (
    <button onClick={handleNextPage} className="pagination-button next-page-button">
      Next
    </button>
  )}
</div>

        </div>
      )}

      <CenteredImage imageUrl={backgroundImg} />
    </div>
  );
};

SearchPage.title = 'Search';

export default SearchPage;