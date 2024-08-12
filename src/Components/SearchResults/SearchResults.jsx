import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery();
    const searchTerm = query.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchTerm) {
            // Fetch data from the DummyJSON API
            axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
                .then(response => {
                    console.log(response.data); // Debugging: Check the response structure
                    setResults(response.data.products);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    setError("There was an issue fetching results. Please try again later.");
                    setLoading(false);
                });
        }
    }, [searchTerm]);

    if (loading) {
        return <div className="spinner"></div>;
    }
    

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="search-results-container">
            <h1>Search Results for "{searchTerm}"</h1>
            {results.length > 0 ? (
                results.map(result => (
                    <div className="result-item" key={result.id}>
                        <img src={result.thumbnail} alt={result.title} width="100" />
                        <div>
                            <h2>{result.title}</h2>
                            <p>{result.description}</p>
                            <p className="price">Price: ${result.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found 😟</p>
            )}
        </div>
    );
    
}

export default SearchResults;
