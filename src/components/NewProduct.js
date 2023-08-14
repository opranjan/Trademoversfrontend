import React, { useState } from "react";
import axios from "axios";
import "../NewComponent.css";

const NewProduct = () => {
  const [productname, setProductname] = useState("");
  const [productmaterial, setProductmaterial] = useState("");
  const [productcolor, setProductcolor] = useState("");
  const [productsize, setProductsize] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productcategory, setProductcategory] = useState("");
  const [productsubcategory, setProductsubcategory] = useState("");
  const [productdescription, setProductdescription] = useState("");

  const [image, setImage] = useState(null);

  const handleproductnameChange = (e) => {
    setProductname(e.target.value);
  };

  const handleproductmaterialChange = (e) => {
    setProductmaterial(e.target.value);
  };

  const handleproductcolorChange = (e) => {
    setProductcolor(e.target.value);
  };

  const handleproductsizeChange = (e) => {
    setProductsize(e.target.value);
  };

  const handleproductpriceChange = (e) => {
    setProductprice(e.target.value);
  };

  const handleproductcategoryChange = (e) => {
    setProductcategory(e.target.value);
  };

  const handleproductsubcategoryChange = (e) => {
    setProductsubcategory(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setProductdescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("productname", productname);
    formData.append("productmaterial", productmaterial);
    formData.append("productcolor", productcolor);
    formData.append("productsize", productsize);
    formData.append("productprice", productprice);
    formData.append("productcategory", productcategory);
    formData.append("productsubcategory", productsubcategory);
    formData.append("productdescription", productdescription);

    try {
      const response = await axios.post(
        "https://trademovers.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Reset form after successful upload
      setProductname("");
      setProductmaterial("");
      setProductcolor("");
      setProductsize("");
      setProductprice("");
      setProductcategory("");
      setProductsubcategory("");
      setProductdescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <center className="formconatiner">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="formfieldcontainer"
        >
          <h1>Upload Product</h1>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="images"
            onChange={handleImageChange}
          />

          <input
            type="text"
            placeholder="Product Name"
            name="productname"
            value={productname}
            onChange={handleproductnameChange}
          />

          <input
            type="text"
            name="productmaterial"
            placeholder="Product Material"
            value={productmaterial}
            onChange={handleproductmaterialChange}
          />
          <input
            type="text"
            placeholder="Product Color"
            name="productcolor"
            value={productcolor}
            onChange={handleproductcolorChange}
          />

          <input
            type="text"
            placeholder="Product Size"
            name="productsize"
            value={productsize}
            onChange={handleproductsizeChange}
          />

          <input
            type="text"
            placeholder="Product Price"
            name="productprice"
            value={productprice}
            onChange={handleproductpriceChange}
          />

          <input
            type="text"
            placeholder="Product Category"
            name="productcategory"
            value={productcategory}
            onChange={handleproductcategoryChange}
          />

          {/* productsubcategory */}

          <input
            type="text"
            placeholder="Product SubCategory"
            name="productsubcategory"
            value={productsubcategory}
            onChange={handleproductsubcategoryChange}
          />

          <input
            type="text"
            placeholder="Product Description"
            name="productdescription"
            value={productdescription}
            onChange={handledescriptionChange}
          />

          <input type="submit" />
        </form>
      </center>
    </>
  );
};

export default NewProduct;
