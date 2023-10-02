import React, { useState } from 'react';
import axios from "axios";
import './ProductForm.css';

const ProductForm = ({ pro }) => {
  console.log(pro);
  const [del, setDel] = useState(false);
  const [product, setProduct] = useState({
    _id: (pro._id) ? pro._id : '',
    ProductName: (pro.ProductName) ? pro.ProductName : '',
    Description: (pro.Description !== '') ? pro.Description : '',
    Category: (pro.Category !== '') ? pro.Category : '',
    Location: (pro.Location !== '') ? pro.Location : '',
    Price: (pro.Price !== '') ? pro.Price : '',
    Images: (pro.Images.length !== 0) ? pro.Images : [],
  });
  const [imagePreviews, setImagePreviews] = useState([]); // Store image preview URLs here

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;

    const previewImages = Array.from(files).map((file) => {
      const previewURL = URL.createObjectURL(file);
      return previewURL;
    });

    setImagePreviews([...imagePreviews, ...previewImages]);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result.split(',')[1]; // Extract base64 string
        setProduct({
          ...product,
          Images: [...product.Images, base64String],
        });
      };
      reader.readAsDataURL(files[i]); // Read file as data URL
    }
  };

  const removeImagePreview = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);

    const updatedImages = [...product.Images];
    updatedImages.splice(index, 1);
    setProduct({
      ...product,
      Images: updatedImages,
    });
  };
  const delClick = () => {
    setDel(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API
      let response;

      if (product._id) {
        if (del) {
          //console.log(product._id);
          response = await axios.delete('http://localhost:5000/delproduct', {
            data: { _id: product._id },
          });

        }
        else {
          response = await axios.put('http://localhost:5000/editproduct', product);
        }
      }
      else {
        response = await axios.post('http://localhost:5000/addproduct', product);
      }

      // || response.status === 200
      if (response.status === 200) {
        // Reset the form, show a success message, and clear image previews
        setProduct({
          ProductName: '',
          Description: '',
          Category: '',
          Location: '',
          Price: '',
          Images: [],
        });
        setImagePreviews([]);
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err.message);
      alert('An error occurred while saving the product.');
    }
  };


  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="ProductName"
            value={product.ProductName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="Description"
            value={product.Description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="Category"
            value={product.Category}
            onChange={handleInputChange}
            className="custom-select"
          >
            <option value="">Select a category</option>
            <option value="bedroom">Bedroom</option>
            <option value="livingroom">Living Room</option>
            <option value="dinningroom">Dining Room</option>
            <option value="studyroom">Study Room</option>
            <option value="appliances">Appliances</option>
            <option value="vehicles">Vehicles</option>
            <option value="videogames">Video Games</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="Location"
            value={product.Location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="Price"
            value={product.Price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Images:</label>
          <input
            type="file"
            name="Images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </div>
        <div className="image-preview">
          {(product.Images.length === 0) ? imagePreviews.map((preview, index) => (
            <div key={index} className="image-preview-item">
              <img src={preview} alt={`Image ${index}`} />
              <button
                type="button"
                onClick={() => removeImagePreview(index)}
                className="remove-button"
              >
                X
              </button>
            </div>
          )) : product.Images.map((preview, index) => (
            <div key={index} className="image-preview-item">
              <img 
              src={`data:image/jpg;base64,${preview}`}  alt={`Image ${index}`} />
              <button
                type="button"
                onClick={() => removeImagePreview(index)}
                className="remove-button"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
        {
          (product._id) ? <button style={{ marginTop: "10px", backgroundColor: "red" }} type="submit" onClick={delClick}>Delete Product</button> : <div></div>
        }
      </form>
    </div>
  );
};

export default ProductForm;
