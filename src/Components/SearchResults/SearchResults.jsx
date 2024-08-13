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
                    <div className="result-item h " key={result._id} onClick={() => handleProductClick(result.id)}>
                        <img className='h-[120px] w-[120px]' src={result.image} alt={result.name} />
                        <div className='ml-5 flex  items-center gap-10'>
                            <div>
                            <h2>{result.name}</h2>
                            <p className="price "> Old Price:  <span className='text-black'>₹</span> <strike className='text-zinc-600'>{result.old_price}</strike></p>
                            <p className="price1">New Price: <span className='text-black'>₹</span>  <span className='text-red-700'>{result.new_price}</span> </p>
                            <p className="description ">Category: <span className='text-blue-600'>{result.category}</span></p>
                            </div>
                            <div className='flex gap-[20px] '>
                                <button className='active:bg-green-600 ml-[15vw]  rounded-md px-3 py-1 bg-green-500 text-white ' onClick={(e) => { e.stopPropagation(); addToCart(result.id) }}>ADD TO CART</button>
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
