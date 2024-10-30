// import React from 'react';
// import { GiCook } from "react-icons/gi";
// import Navbarmenu from '../data/Navbarmenu.js';
// import { FaShoppingBag } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { IoMenuOutline } from "react-icons/io5";
// import Responsivemenu from './Responsivemenu.jsx';
// import c1 from '../Asset/c1.png'

// function Navbar() {
//     const [open, setOpen] = React.useState(false);
//   return (
//    <>
//    <nav>
//     <div className='container flex justify-between items-center'>
//     {/* Logo section */}
//     <div className='flex gap-2 text-2xl items-center  '>
//      <span className='text-primary'><img src={c1} alt="" /></span>
//     <h1 className='font-fntprimary'>cake'es</h1>
    
//     </div>
//     {/* Menu section */}
//     <div className='hidden md:block'>
//         <ul className='flex items-center gap-6 text-gray-600'>
//             {
//                 Navbarmenu.map((item) => {
//                  return(
//                     <li className='hover:bg-primary font-fntprimary  px-2 rounded-full duration-500 hover:text-white text-xl' key={item.id}>
//                         <a href={item.link}>{item.title}</a>
//                     </li>
//                  ) })
//             }
//         </ul>
//     </div>

//     {/* icon section */}
//     <div className='flex items-center  gap-4'>

//         <button className='text-xl rounded-full p-2 hover:bg-primary hover:text-white duration-300'> 
//         <FaSearch />
//         </button>

//         <button className='text-xl rounded-full p-2 hover:bg-primary hover:text-white duration-300'> 
//         <FaShoppingBag />
//         </button>
       
//         <button className='text-xl rounded-full py-2 px-4 hover:bg-primary hover:text-white duration-300'> 
//         <FaUserAlt />
//         </button>
       
//     </div>
//     {/* mobile menu section */}
//     <div className='md:hidden' onClick={() => { 
//     console.log('Menu clicked'); // Debugging
//     setOpen(!open); 
//       }}>
//     <IoMenuOutline className='text-4xl' />
//     </div>

//     </div>
//    </nav>

//    {/* mobile sidebar */}
//    <Responsivemenu open={open} />
 
//    </>
//   )
// }

// export default Navbar

// import { Cake, ShoppingBag, Search, User } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import cake from '../Asset/c1.png';

// export default function Navbar() {
//   return (
//     <nav className="bg-white py-4 shadow-sm fixed w-full top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3">
//         <img src={cake} alt="" />
//           {/* <Cake className="h-8 w-8 text-pink-500" /> */}
//           <span className="text-2xl font-fntprimary">Cake'es</span>
//         </Link>
        
//         <div className="hidden md:flex gap-8 font-fntprimary text-xl ">
//           <Link to="/" className="hover:text-pink-500 transition-colors">Menu</Link>
//           <Link to="/about" className="hover:text-pink-500 transition-colors">About</Link>
//           <Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
//           <Link to="/login" className="hover:text-pink-500 transition-colors">Login</Link>
//         </div>

//         <div className="flex items-center  gap-2">
//           <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
//             <User className="h-5 w-5 text-gray-600 hover:text-pink-500" />
//           </button>
//           <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
//             <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-pink-500" />
//           </button>
//           <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
//             <Search className="h-5 w-5 text-gray-600 hover:text-pink-500" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { Cake, ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import cake from '../Asset/c1.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm fixed w-full top-0 z-50">

      <div className="container justify-around  mx-auto flex items-center  ">
        {/* Logo Section */}
        <Link to="/" className="flex  gap-3">
          <img src={cake} alt="" className="h-8 w-8" />
          <span className="text-2xl font-fntprimary">Cake'es</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-fntprimary text-xl">
          <Link to="/Menu" className="hover:text-pink-500 transition-colors">Menu</Link>
          <Link to="/about" className="hover:text-pink-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
          <Link to="/login" className="hover:text-pink-500 transition-colors">Login</Link>
        </div>

        {/* Icons */}
        <div className="flex justify-end items-end gap-2  ">
          {/* <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
            <User className="h-5 w-5 text-gray-600 hover:text-pink-500" />
          </button> */}
          <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-pink-500" />
          </button>
          <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
            <Search className="h-5 w-5 text-gray-600 hover:text-pink-500" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 rounded-full transition-colors">
            {menuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md justify-center">
          <div className="flex flex-col items-center gap-4 font-fntprimary text-xl">
            <Link to="/Menu" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors">Menu</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors">Contact</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
