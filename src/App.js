// import React from "react";
// import Nav from './Components/Navbar.jsx';
// import Home from "./Components/Home.jsx";
// function App() {
//   return (
//     <>
//       <Nav/>
//       <Home/>
//       </>
//   )
// }

// export default App;


import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar.jsx';
import Home from "./Components/Home.jsx";
import Products from "./Components/Product.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <BrowserRouter basename="/Cake">
    <Nav /> 
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Home /> 
            <Products/>
            {/* <About/> */}
            {/* <Contact/> */}
           
          </>
        } 
      />
      {/* <Route path="/product/:id" element={<Product collections={data} />} />
      <Route path="/NavCollection" element={<NavCollection />} />
      <Route path="/Contact" element={<Contact />} /> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
