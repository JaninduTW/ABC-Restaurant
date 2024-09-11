import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Homepage Components/Navbar';
import Footer from '../Homepage Components/Footer';

const Order = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [foodItems, setFoodItems] = useState([]);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/categories');
        const fetchedCategories = response.data.map((cat) => cat.categoryName);
        setCategories(['All', ...fetchedCategories]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch food items from the API
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/menu');
        const fetchedFoodItems = response.data.map((menuItem) => ({
          id: menuItem.menuId,
          name: menuItem.item,
          price: menuItem.price,
          image: `http://localhost:8080/menu/image/${menuItem.menuId}`,
          category: menuItem.category.categoryName,
          description: menuItem.description,
          availability: menuItem.availability ? 'Yes' : 'No' // Adjust for boolean value
        }));
        setFoodItems(fetchedFoodItems);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  // Filter food items based on the search term and selected category
  const filteredItems = foodItems.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <p className='text-[#000000] font-bold py-3 text-3xl pb-2 pt-[5.5rem] bg-white'>Menu</p>
      </div>

      {/* Search bar */}
      <div className='w-full px-4 bg-white text-center py-4'>
        <input
          type='text'
          placeholder='Search for food...'
          className='border p-2 w-[300px] rounded-md focus:ring-2 focus:ring-[#f09c20] outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category selection */}
      <div className='w-full px-4 bg-white text-center py-4'>
        <select
          className='border p-2 rounded-md focus:ring-2 focus:ring-[#f09c20] outline-none'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered food items */}
      <div className='w-full px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 pt-4'>
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <div key={item.id} className='w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300'>
                <img className='w-56 mx-auto mt-[-2rem] bg-transparent' src={item.image} alt={item.name} />
                <h2 className='text-2xl font-bold text-center mb-2'>{item.name}</h2>
                <p className='text-xl font-semibold text-center mb-2'>{item.category}</p>
                <p className='text-4xl font-bold text-center mb-2'>Rs. {item.price}/=</p>
                <p className='text-center mb-2'>{item.description}</p>
                <p className={`text-center font-medium mt-2 ${item.availability === 'Yes' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.availability}
                </p>
              </div>
            ))
          ) : (
            <p className='text-center w-full text-gray-600'>No food items found. Please try a different search.</p>
          )}
        </div>
      </div>

      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
