import React, { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import {
  CustomersWrapper,
  CustomerList,
  CustomerCard,
  StyledCustomerInput,
} from "../../styled/styledAdmin/customerStyled/StyledCustomers";
import { StyledEditButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";

import DeleteCustomer from "../ManageCustomers/DeleteCustomer";
import SaveCustomer from "../ManageCustomers/SaveCustomer";
import { IProduct } from "../../../models/IProducts";

const ShowProducts = () => {
  const { products } = useProducts();
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
    // Skicka uppdaterad produkt till API
    setEditingProductId(null);
  };

  const onDeleteProduct = (id: number) => {
    // Ta bort produkten från listan efter borttagning
  };

  return (
    <CustomersWrapper>
      <CustomerList>
        {products?.map((products) => {
          const isEditing = editingProductId === products.id;
          return (
            <CustomerCard key={products.id}>
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
                <SaveCustomer product={editedProduct!} onSave={onSaveProduct} />
              )}
              <DeleteCustomer
                onDelete={onDeleteProduct}
                id={products.id ?? 0}
              />
            </CustomerCard>
          );
        })}
      </CustomerList>
    </CustomersWrapper>
  );
};

export default ShowProducts;
