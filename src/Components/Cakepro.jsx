// import React from 'react';
// import { useEffect, useState } from 'react';


// function Cakepro() {
//   const [product, setProduct ] = useState ([]);

//   useEffect (() => {
//     const fetchData = async () =>{
//       try{
//           const response = await fetch ("/Product.json");
//           const data = await response.json();
//           setProduct(data)
//       }
//       catch (error){
//         console.log("Error fetching Data: ", error);
        
//       }
//     }
//   }, [])


//   return (
    
//     <div class="container absolute">
//     <div class="mb-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between">
//         <ProductCards product = {product}/>
//     </div>
//   </div>
  
//   )
// }

// export default Cakepro

// import React from 'react';
// import data from '../ProductData/Product.js';

// function Cakepro() {
//   return (
//     <div className=''>
//       {
//         data.map((item) => (
//           <div key={item.id}>
//             <img src={item.img} alt="" />
//             <p>{item.details}</p>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Cakepro;

// import React from 'react';
// import data from '../ProductData/Product.js';
// import '../Components/Cakepro.css';

// function Cakepro() {
//   return (
//     <div className="top-20 relative container h-screen w-full      justify-center overflow-hidden">
//          <h1 className='text-2xl text-primary font-fntprimary mb-8 items-center justify-center flex'>Our Creation</h1>
//       {/* Card */}
//       <div className=" grid w-full  gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-50">

//         {data.map((item) => (
//           <div key={item.id} className="w-10/12   border-2 border-b-slate-950  " >
//             <img src= {`${item.img}`} alt="Cake" className="card-img" />
//             <p className="card-details">{item.details}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cakepro;

import React from 'react';
import data from '../ProductData/Product.js';
import './Cakepro.css';

function Cakepro() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center  mb-12 text-primary font-fntprimary mt-5">
          Our Creations
        </h1>
        
        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
          {data.map((item) => (
            <div
              key={item.id}
              className="product-card hover:-translate-y-4 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.head}
                  className="card-img hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.head}
                </p>
              </div>
              
              <div className="px-6 pb-6">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cakepro;