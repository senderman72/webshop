import React, { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import {
  CustomersWrapper,
  CustomerList,
  CustomerCard,
  StyledCustomerInput,
} from "../../styled/styledAdmin/customerStyled/StyledCustomers";
import { StyledEditButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";

import { IProduct } from "../../../models/IProducts";
import CreateProduct from "./CreateProduct";

import { ProductImageAdmin } from "../../styled/styledAdmin/productsStyled/productImage";
import DeleteProduct from "./DeleteProduct";
import SaveProduct from "./SaveProduct";

const ShowProducts = () => {
  const { products, setProducts } = useProducts();
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [editedProduct, setEditedProduct] = useState<IProduct | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, [field]: e.target.value });
    }
  };

  const onSaveProduct = async (updatedProduct: IProduct) => {
    setProducts((prevCustomers) =>
      prevCustomers?.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditedProduct(updatedProduct);
    setEditingProductId(null);
  };

  const onAddProduct = (newProduct: IProduct) => {
    setProducts((prev) => (prev ? [...prev, newProduct] : [newProduct]));
  };

  const onDeleteProduct = (id: number) => {
    setProducts((prev) => prev?.filter((product) => product.id !== id));
  };

  return (
    <CustomersWrapper>
      <CreateProduct onAddProduct={onAddProduct} />
      <CustomerList>
        {products?.map((products) => {
          const isEditing = editingProductId === products.id;
          return (
            <CustomerCard key={products.id}>
              <ProductImageAdmin src={products.image} alt={products.name} />
              <h5>Namn:</h5>
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedProduct?.name : products.name}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <h5>Pris:</h5>
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedProduct?.price : products.price}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "price")}
              />
              <h5>Kategori:</h5>
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedProduct?.category : products.category}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "category")}
              />
              Lagerstatus:
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedProduct?.stock : products.stock}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "stock")}
              />
              {!isEditing ? (
                <StyledEditButton
                  onClick={() => {
                    setEditingProductId(products.id);
                    setEditedProduct({ ...products });
                  }}
                >
                  Redigera
                </StyledEditButton>
              ) : (
                <SaveProduct product={editedProduct!} onSave={onSaveProduct} />
              )}
              <DeleteProduct onDelete={onDeleteProduct} id={products.id ?? 0} />
            </CustomerCard>
          );
        })}
      </CustomerList>
    </CustomersWrapper>
  );
};

export default ShowProducts;
