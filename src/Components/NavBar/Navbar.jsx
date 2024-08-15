import React, { useContext, useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import user_icon from '../Assets/user_icon1.png'; // Add a user icon image
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import '../NavBar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import arrowbtn from '../Assets/arrowbtn.png';

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [searchQuery, setSearchQuery] = useState("");
    const [showUserProfile, setShowUserProfile] = useState(false); // State to toggle user profile panel
    const [userData, setUserData] = useState(null); // State to store user data
    const [editMode, setEditMode] = useState(false); // State to toggle edit mode
    const [formData, setFormData] = useState({ name: '', email: '', address: '' }); // Form data
    const { getTotalCartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data if the user is logged in
        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:4000/getuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            })
            .then(response => response.json())
            .then(data => {
                setUserData(data); // Set user data in state
                setFormData({ name: data.name, email: data.email, address: data.address }); // Initialize form data
            })
            .catch(error => console.error('Error fetching user data:', error));
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    const toggleUserProfile = () => {
        setShowUserProfile(!showUserProfile);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('auth-token');
        fetch('http://localhost:4000/updateuser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token,
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setUserData(data.user);
                setEditMode(false);
            }
        })
        .catch(error => console.error('Error updating user profile:', error));
    };

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    };

    return (
        <div className='nav-div fixed w-full top-0 left-0 flex justify-around p-[16px] shadow-[0_1px_3px_-2px_black] bg-white'>
            <Link to='/'>
                <div className='flex items-center gap-[10px]'>
                    <img src={logo} alt="GrocerEase Logo" />
                    <p className='text-[#171717] text-2xl font-semibold'>GrocerEase</p>
                </div>
            </Link>
            <ul className='flex items-center list-none gap-[50px] text-[#626262] font-medium text-sm'>
                <li onClick={() => { setMenu("Shop") }} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'>
                    <Link to='/'>Shop</Link>
                    {menu === "Shop" ? <hr className='w-[80%] h-[3px] rounded-md bg-red-600' /> : <></>}
                </li>
                <li onClick={() => { setMenu("Snacks") }} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'>
                    <Link to='/Snacks'>Snacks & ColdDrinks</Link>
                    {menu === "Snacks" ? <hr className='w-[80%] h-[3px] rounded-md bg-red-600' /> : <></>}
                </li>
                <li onClick={() => { setMenu("Vegetables") }} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'>
                    <Link to='/Vegetables'>Vegetables and Fruits</Link>
                    {menu === "Vegetables" ? <hr className='w-[80%] h-[3px] rounded-md bg-red-600' /> : <></>}
                </li>
                <li onClick={() => { setMenu("HouseHolds") }} className='flex flex-col items-center cursor-pointer justify-center gap-[3px]'>
                    <Link to='/HouseHolds'>HouseHolds</Link>
                    {menu === "HouseHolds" ? <hr className='w-[80%] h-[3px] rounded-md bg-red-600' /> : <></>}
                </li>
            </ul>
            <form onSubmit={handleSearch} className='flex items-center gap-[10px] input__container'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className=' p-[8px] pr-[40px] border-[1px] border-gray-300 rounded-xl focus:outline-none focus:border-red-600'
                />
                <button type="submit" className='hover:scale-105 bg-transparent w-[40px] h-[40px] border-2 border-black border-solid rounded-full  bg-zinc-100 active:bg-[#ff6f69]'>
                    <FontAwesomeIcon icon={faSearch} className='text-black hover:text-red-600 transition-colors duration-200 ' />
                </button>
            </form>
            <div className='flex items-center gap-[45px]'>
                {localStorage.getItem('auth-token') ? 
                    <>
                        <img src={user_icon} alt="User Profile" className='hover:scale-105 cursor-pointer h-[50px] w-[50px] rounded-full border-2 border-solid border-black' onClick={toggleUserProfile} />
                        <Link to='/cart'><img className='hover:scale-105' src={cart_icon} alt="Cart" /></Link>
                        <div className='hover:animate-ping w-[22px] h-[22px] z-10 flex justify-center items-center mt-[-35px] ml-[-55px] text-sm rounded-xl bg-red-500 text-white'>
                            {getTotalCartItems()}
                        </div>
                    </>
                    : 
                    <Link to='/login'><button id='button'>Login</button></Link>
                }
            </div>

            {/* User Profile Panel */}
            {showUserProfile && userData && (
                <div className='fixed right-0 mt-20 w-[300px] h-fit bg-zinc-200 shadow-lg p-4 transition-transform transform flex flex-col items-center gap-5'>
                    <div className='flex items-center gap-4'>
                    <h2 className='text-xl font-semibold ml-[65px]'>User Profile</h2>
                    <img className='h-[30px] w-[30px] ml-[40px] cursor-pointer' src={arrowbtn} onClick={toggleUserProfile} alt="" />
                    </div>
                    
                    <img  src={user_icon} alt="User Profile" className='cursor-pointer h-[50px] w-[50px] rounded-full border-2 border-solid border-black' onClick={toggleUserProfile} />
                    {editMode ? (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className='p-2 border rounded-md'
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className='p-2 border rounded-md'
                            />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className='p-2 border rounded-md'
                            />
                            <button type="submit" className='p-2 bg-blue-500 text-white rounded-md'>Save Changes</button>
                            <button type="button" onClick={() => setEditMode(false)} className='p-2 bg-red-500 text-white rounded-md'>Cancel</button>
                        </form>
                    ) : (
                        <div className='flex flex-col items-center gap-4'>
                            <p><strong>Name:</strong> <span className='text-red-600'>{userData.name}</span></p>
                            <p><strong>Email:</strong> <span className='text-green-600'>{userData.email}</span></p>
                            <p><strong>Address:</strong> <span className='text-blue-600'>{userData.address}</span></p>
                            <button onClick={() => setEditMode(true)} className='p-2 bg-blue-500 text-white rounded-md mt-2'>Edit Profile</button>
                            {/* Logout button added here */}
                            <button onClick={handleLogout} className='' id='button'>Logout</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;
