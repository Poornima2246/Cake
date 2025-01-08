 

import React, { useState } from "react";
import axios from "axios";

function Addpage() {
  const url = "https://cake-server-7c9k.onrender.com";
  const [formData, setFormData] = useState({
    mainImage: null,
    addImage1: null,
    addImage2: null,
    name: "",
    description: "",
    category: "Cake",
    price: "",
  });

  // Handle changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    
    data.append("mainImage", formData.mainImage);
    if (formData.addImage1) data.append("addImage1", formData.addImage1);
    if (formData.addImage2) data.append("addImage2", formData.addImage2);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("price", formData.price);

    try {
      const response = await axios.post(`${url}/api/dessert/add/`, data);
      if (response.data.success) {
        alert("Cake added successfully!");
        setFormData({
          mainImage: null,
          addImage1: null,
          addImage2: null,
          name: "",
          description: "",
          category: "Cake",
          price: "",
        });
      } else {
        alert(response.data.message || "Error adding cake");
      }
    } catch (error) {
      console.error("Error adding cake:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-16"
      >
        {/* Main Image Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mainImage">Main Product Image</label>
          <input
            type="file"
            id="mainImage"
            name="mainImage"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Additional Images Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="additionalImages">Addtional Image </label>
          <input
            type="file"
            id="addImage1"
            name="addImage1"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
            multiple // Allow multiple file selection
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="additionalImages">Addtional Image </label>
          <input
            type="file"
            id="addImage2"
            name="addImage2"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
            multiple // Allow multiple file selection
          />
        </div>

        {/* Product Name Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Product Description Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded-md"
            rows="4"
          />
        </div>

        {/* Product Category Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Product Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 border rounded-md"
          >
            <option value="Cake">Cake</option>
            <option value="Cupcake">Cupcake</option>
            <option value="Donut">Donut</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Product Price Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="$20"
            className="p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 p-2 rounded-lg bg-blue-400 text-white"
        >
          Add Upload
        </button>
      </form>
    </div>
  );
}

export default Addpage; 

// //new file 1
// import React, { useState } from "react";
// import axios from "axios";

// function AddPage() {
//   const url = "https://cake-server-7c9k.onrender.com";
//   const [formData, setFormData] = useState({
//     mainImage: null,
//     addImage1: null,
//     addImage2: null,
//     name: "",
//     description: "",
//     category: "Cake",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     for (const key in formData) {
//       if (formData[key]) data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post(`${url}/api/dessert/add`, data);
//       if (response.status === 200) {
//         alert("Cake added successfully!");
//         setFormData({
//           mainImage: null,
//           addImage1: null,
//           addImage2: null,
//           name: "",
//           description: "",
//           category: "Cake",
//           price: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add cake. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-pink-200">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 w-full max-w-lg p-6 bg-white rounded-lg shadow-lg mt-16"
//       >
//         <h2 className="text-center text-2xl font-bold text-gray-700">Add New Cake</h2>

//         {/* Main Image Upload */}
//         <label className="block font-semibold text-gray-600">Main Image:</label>
//         <input
//           type="file"
//           name="mainImage"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="border border-gray-300 p-2 rounded-md"
//           required
//         />

//         {/* Additional Image 1 Upload */}
//         <label className="block font-semibold text-gray-600">Additional Image 1:</label>
//         <input
//           type="file"
//           name="addImage1"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="border border-gray-300 p-2 rounded-md"
//         />

//         {/* Additional Image 2 Upload */}
//         <label className="block font-semibold text-gray-600">Additional Image 2:</label>
//         <input
//           type="file"
//           name="addImage2"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="border border-gray-300 p-2 rounded-md"
//         />

//         {/* Name Input */}
//         <label className="block font-semibold text-gray-600">Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-md"
//           placeholder="Enter cake name"
//           required
//         />

//         {/* Description Input */}
//         <label className="block font-semibold text-gray-600">Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-md h-24"
//           placeholder="Enter cake description"
//           required
//         ></textarea>

//         {/* Category Select */}
//         <label className="block font-semibold text-gray-600">Category:</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-md"
//           required
//         >
//           <option value="Cake">Cake</option>
//           <option value="Pastry">Pastry</option>
//           <option value="Bread">Bread</option>
//           <option value="Dessert">Dessert</option>
//         </select>

//         {/* Price Input */}
//         <label className="block font-semibold text-gray-600">Price:</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-md"
//           placeholder="Enter price in INR"
//           required
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Add Cake
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPage;

 