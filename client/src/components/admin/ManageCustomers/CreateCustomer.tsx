import React, { useState, useEffect } from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  Form,
  Input,
  Inputbox,
} from "../../styled/styledAdmin/customerStyled/CreatCustomerForm";
import { AddToCartBtn } from "../../styled/styledProducts/ProductCards";
import { CustomerCreate } from "../../../models/ICustomer";

interface CreateCustomerProps {
  onAddCustomer: (newCustomer: CustomerCreate) => void;
}

const CreateCustomer = ({ onAddCustomer }: CreateCustomerProps) => {
  const { addCustomer, customers } = useCustomer();

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("createCustomerFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          id: 0,
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          phone: "",
          street_address: "",
          postal_code: "",
          city: "",
          country: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("createCustomerFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingCustomer = customers?.find(
      (customer) => customer.email === formData.email
    );

    if (existingCustomer) {
      setEmailAlreadyExists(true);
    } else {
      const newCustomer = {
        ...formData,
      };

      setFormData({
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        street_address: "",
        postal_code: "",
        city: "",
        country: "",
      });

      localStorage.removeItem("createCustomerFormData");
      addCustomer(formData);
      onAddCustomer(newCustomer);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Inputbox>
        <Input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="street_address"
          placeholder="Street Address"
          value={formData.street_address}
          onChange={handleChange}
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={formData.postal_code}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
      </Inputbox>

      {emailAlreadyExists && <p>Email already exists</p>}

      <AddToCartBtn type="submit">Skapa kund</AddToCartBtn>
    </Form>
  );
};

export default CreateCustomer;
