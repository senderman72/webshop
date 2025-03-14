import React, { useState } from "react";

import {
  Form,
  Input,
  Inputbox,
} from "../../styled/styledAdmin/customerStyled/CreatCustomerForm";
import { AddToCartBtn } from "../../styled/styledProducts/ProductCards";

import useProducts from "../../../hooks/useProducts";
import { ProductCreate } from "../../../models/IProducts";

interface CreateProductProps {
  onAddProduct: (newProduct: ProductCreate) => void;
}

const CreateProduct = ({ onAddProduct }: CreateProductProps) => {
  const { addProduct } = useProducts();

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
    };

    setFormData({
      id: 0,
      name: "",
      description: "",
      price: 0,
      stock: 0,
      category: "",
      image: "",
    });

    addProduct(formData);
    onAddProduct(newProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Inputbox>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="stock"
          placeholder="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="image"
          placeholder="Image"
          value={formData.image}
          onChange={handleChange}
        />
      </Inputbox>

      <AddToCartBtn type="submit">Create Product</AddToCartBtn>
    </Form>
  );
};

export default CreateProduct;
