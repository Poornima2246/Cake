 


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import { motion } from "framer-motion";// For retrieving the product ID from the URL
import Breadcrumbs from "./Breadcrumbs.jsx";

function ProductDetails() {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null); // State for storing single product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [mainImage, setMainImage] = useState(""); // State for main image

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details by ID
        const response = await axios.get(`http://localhost:4000/api/dessert/${id}`);
        
        // If the product data is valid, set it in state
        if (response.data) {
          setProduct(response.data);
          setMainImage(response.data.mainImage); // Set the main image
        } else {
          throw new Error("Product not found.");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle loading state
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // Handle error state
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Render product details
  return (
    <div className="product-details container mx-auto p-4 mt-16">
        <Breadcrumbs />
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Product Image */}
        <div className="flex-1 mt-10 ">
          <motion.img
            initial = {{x:-100 , opcacity: 0}}
            animate = {{x:0 , opcacity:1}}
            transition  = {{duration:1}}
            src={`http://localhost:4000/upload/${mainImage}`}
            alt={product.name || "Product"}
            className="w-full h-full  lg:w-8/12 lg:h-8/12 mx-auto object-cover rounded-xl shadow-md"
            onError={(e) => { e.target.src = "/placeholder-image.png"; }} // Fallback if the image doesn't load
          />
        </div>
        
        {/* Product Info */}
        <div className="flex-1 lg:mt-20">
          <h1 className="text-xl text-pink-500">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-500 mb-4">Price: ${product.price}</p>
          <p className="text-md text-gray-600 mb-2">Category: {product.category}</p>

          {/* Additional Images */}
          <div className="flex gap-4 mt-4">
            {product.addImage1 && (
              <img
                src={`http://localhost:4000/upload/${product.addImage1}`}
                alt="Additional view 1"
                className="w-20 h-20 object-cover rounded shadow-md cursor-pointer"
                onClick={() => setMainImage(product.addImage1)}
                onError={(e) => { e.target.src = "/placeholder-image.png"; }} // Fallback for missing images
              />
            )}
            {product.addImage2 && (
              <img
                src={`http://localhost:4000/upload/${product.addImage2}`}
                alt="Additional view 2"
                className="w-20 h-20 object-cover rounded shadow-md cursor-pointer"
                 onClick={()=>setMainImage(product.addImage2)}
                onError={(e) => { e.target.src = "/placeholder-image.png"; }} // Fallback for missing images
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;