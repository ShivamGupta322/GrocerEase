import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css';
import { ShopContext } from '../Context/ShopContext';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const { addToCart, message, showMessage } = useContext(ShopContext);
    const query = useQuery();
    const searchTerm = query.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Add navigate hook

    useEffect(() => {
        if (searchTerm) {
            axios.get('http://localhost:4000/allproducts')
                .then(response => {
                    const allProducts = response.data;
                    console.log("All Products:", allProducts);

                    const filteredProducts = allProducts.filter(product =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                    setResults(filteredProducts);
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

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Navigate to the product display page
    };

    return (
        <div className="search-results-container">
            <h1>Search Results for "{searchTerm}"</h1>
            {results.length > 0 ? (
                results.map(result => (
                    <div className="result-item h" key={result._id} onClick={() => handleProductClick(result.id)}>
                        <img className='h-[15vh] w-[6vh]' src={result.image} alt={result.name} />
                        <div>
                            <h2>{result.name}</h2>
                            <p className="price">Price: ₹{result.old_price}</p>
                            <p className="price">Price: ₹ <strike>{result.new_price}</strike> </p>
                            <div className='flex gap-[20px]'>
                                <button className='active:bg-green-600 border-2 border-solid border-black rounded-md px-3 py-1 bg-green-500 text-white ' onClick={(e) => { e.stopPropagation(); addToCart(result.id) }}>ADD TO CART</button>
                                {showMessage && (<p className={`fade-message ${showMessage ? 'visible' : ''} text-green-600 mt-4`}>{message}</p>)}
                            </div>
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
