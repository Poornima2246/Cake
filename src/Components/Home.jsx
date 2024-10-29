// import React from 'react';
// import  cake from '../Asset/cake.png';
// import { FaArrowRight } from "react-icons/fa";

// function Home() {
//   return (
//     <div>
//         <div className=' grid grid-cols-1 md:grid-cols-2  bg-backimg  bg-cover bg-center h-screen' id='hero'>

//             {/* text section  */}
//             <div className=' justify-center items-center mt-8 sm:mt-12 md:mt-24  '>
//                 <h1 className='text-start text-5xl text-white ml-10 sm:ml-32 md:ml-40 '>Indulge in <span className='text-primary font-fntprimary '> Sweet Elegance</span></h1>
//                 <p className='text-black text-balance  mt-4 md:mt-8 ml-10 sm:ml-32 md:ml-40'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-go </p>
//                 <button className='flex items-center  ml-10 sm:ml-32 md:ml-40 mt-3'>
//                 Order Now <FaArrowRight className='ml-2 mt-1' />
//                </button>
//             </div>
//             {/* image section  */}
//             <div className='justify-center items-center' >
//                 <img className='w-11/12 mx-auto' src={cake} alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home;

// import  cake from '../Asset/cake.png';
// import React from 'react';

// export default function Hero() {
//   return (
//     <div className="relative bg-backimg bg-cover  h-screen flex items-center overflow-hidden">
    
      
//       <div className="container relative flex flex-col md:flex-row items-center justify-between gap-12 bg-back ">
//         <div className="max-w-lg text-center md:text-left">
//           <h1 className="md:-mt-52 text-4xl md:text-5xl font-script  text-white mb-4 ">Indulge in Sweet Elegance</h1>
//           <p className="text-balck text-normal mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-</p>
//           <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors">
//             Order Now
//           </button>
//         </div>
        
//         <div className="  md:-mt-40  ml-5 flex-shrink-0   lg:w-[600px]   lg:h-[600px] flex items-center justify-center">
//           <img 
//             src= {cake}  alt=""
//             className=" lg:w-[650px] h-[450px] lg:h-[450px] object-cover rounded-full animate-float"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import  cake from '../Asset/cake.png';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-backimg bg-cover  h-screen flex items-center overflow-hidden">
    
      
      <div className="container relative flex flex-col md:flex-row items-center justify-between gap-12 bg-back top-10 lg:top-0">
        <div className="max-w-lg text-center md:text-left">
          <h1 className=" md:-mt-52 text-4xl md:text-5xl font-script  text-white mb-4">Indulge in Sweet Elegance</h1>
          <p className="text-balck text-normal mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-</p>
          <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors">
            Order Now
          </button>
        </div>
        
        <div className=" -mt-20 md:-mt-40  flex-shrink-0  w-[600px] lg:w-[600px]   lg:h-[600px] flex items-center justify-center">
          <img 
            src= {cake}  alt=""
            className="  lg:w-[650px] h-[350px] md:h-[450px] object-cover rounded-full animate-float"
          />
        </div>
        
      </div>
    </div>
  );
}