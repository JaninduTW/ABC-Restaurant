import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import burger from '../Assests/burger.png';
import food1 from '../Assests/food1.png'; 
// import pizza from '../Assests/pizza.png';
// import pasta from '../Assests/pasta.png';

const Menu = () => {
  return (
    <div>
      <Navbar />

      {/* Menu Heading */}
      <div className="text-center">
        <p className="text-[#000000] font-bold py-3 text-3xl pb-2 pt-[5.5rem] bg-white">Menu</p>
      </div>

      {/* Menu Section */}
      <div className="w-full px-4 bg-white py-12">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">

          {/* Menu Item - Burger */}
          <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Burger" />
            <h2 className="text-2xl font-bold text-center mt-4 mb-2">Classic Burger</h2>
            <p className="text-4xl font-bold text-center mb-2">Rs. 1250/=</p>
            <p className="text-center text-gray-600 mb-4">Juicy beef patty, fresh lettuce, tomatoes, cheese, and our signature sauce.</p>
            {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
          </div>

          {/* Menu Item - Wrap */}
          <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Wrap" />
            <h2 className="text-2xl font-bold text-center mt-4 mb-2">Grilled Chicken Wrap</h2>
            <p className="text-4xl font-bold text-center mb-2">Rs. 950/=</p>
            <p className="text-center text-gray-600 mb-4">Grilled chicken, fresh veggies, and a tangy sauce wrapped in a warm tortilla.</p>
            {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
          </div>

          {/* Menu Item - Pizza */}
          <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Pizza" />
            <h2 className="text-2xl font-bold text-center mt-4 mb-2">Pepperoni Pizza</h2>
            <p className="text-4xl font-bold text-center mb-2">Rs. 1800/=</p>
            <p className="text-center text-gray-600 mb-4">Crispy crust, zesty tomato sauce, mozzarella cheese, and pepperoni slices.</p>
            {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
          </div>

          {/* Menu Item - Pasta */}
          <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Pasta" />
            <h2 className="text-2xl font-bold text-center mt-4 mb-2">Creamy Alfredo Pasta</h2>
            <p className="text-4xl font-bold text-center mb-2">Rs. 1500/=</p>
            <p className="text-center text-gray-600 mb-4">Fettuccine pasta tossed in a creamy Alfredo sauce with parmesan cheese.</p>
            {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
          </div>

        </div>
      
      
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 mt-12 "  >

{/* Menu Item - Burger */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Burger" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Classic Burger</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1250/=</p>
  <p className="text-center text-gray-600 mb-4">Juicy beef patty, fresh lettuce, tomatoes, cheese, and our signature sauce.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Wrap */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Wrap" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Grilled Chicken Wrap</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 950/=</p>
  <p className="text-center text-gray-600 mb-4">Grilled chicken, fresh veggies, and a tangy sauce wrapped in a warm tortilla.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Pizza */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Pizza" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Pepperoni Pizza</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1800/=</p>
  <p className="text-center text-gray-600 mb-4">Crispy crust, zesty tomato sauce, mozzarella cheese, and pepperoni slices.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Pasta */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Pasta" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Creamy Alfredo Pasta</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1500/=</p>
  <p className="text-center text-gray-600 mb-4">Fettuccine pasta tossed in a creamy Alfredo sauce with parmesan cheese.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

</div>


<div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 mt-12 "  >

{/* Menu Item - Burger */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Burger" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Classic Burger</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1250/=</p>
  <p className="text-center text-gray-600 mb-4">Juicy beef patty, fresh lettuce, tomatoes, cheese, and our signature sauce.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Wrap */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Wrap" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Grilled Chicken Wrap</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 950/=</p>
  <p className="text-center text-gray-600 mb-4">Grilled chicken, fresh veggies, and a tangy sauce wrapped in a warm tortilla.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Pizza */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={burger} alt="Pizza" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Pepperoni Pizza</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1800/=</p>
  <p className="text-center text-gray-600 mb-4">Crispy crust, zesty tomato sauce, mozzarella cheese, and pepperoni slices.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

{/* Menu Item - Pasta */}
<div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 bg-white">
  <img className="w-56 mx-auto mt-[-2rem]" src={food1} alt="Pasta" />
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">Creamy Alfredo Pasta</h2>
  <p className="text-4xl font-bold text-center mb-2">Rs. 1500/=</p>
  <p className="text-center text-gray-600 mb-4">Fettuccine pasta tossed in a creamy Alfredo sauce with parmesan cheese.</p>
  {/* <button className="bg-[#f09c20] w-[200px] rounded-md font-medium mx-auto py-3 text-white">Order Now</button> */}
</div>

</div>
      
      
      </div>


    



      <Footer />
    </div>
  );
};

export default Menu;
