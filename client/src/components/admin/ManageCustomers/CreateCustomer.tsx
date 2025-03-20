import React, { useState, useEffect } from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  Form,
  Input,
  Inputbox,
  FormError,
} from "../../styled/styledAdmin/customerStyled/CreatCustomerForm";
import { AddToCartBtn } from "../../styled/styledProducts/ProductCards";
import { CustomerCreate } from "../../../models/ICustomer";

interface CreateCustomerProps {
  onAddCustomer: (newCustomer: CustomerCreate) => void;
}

const CreateCustomer = ({ onAddCustomer }: CreateCustomerProps) => {
  const { addCustomer, customers } = useCustomer();

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("createCustomerFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          id: 0,
          firstname: "",
          lastname: "",
          email: "",
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
    setErrorMessage("");
    setEmailAlreadyExists(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.street_address.trim() === "" ||
      formData.postal_code.trim() === "" ||
      formData.city.trim() === "" ||
      formData.country.trim() === ""
    ) {
      setErrorMessage("Alla fält måste fyllas i.");
      return;
    }

    const existingCustomer = customers?.find(
      (customer) => customer.email === formData.email
    );

    if (existingCustomer) {
      onAddCustomer(existingCustomer);
      setErrorMessage("");
      return;
    }

    const newCustomer = { ...formData };

    // Spara och rensa
    addCustomer(newCustomer);
    onAddCustomer(newCustomer);

    setFormData({
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      street_address: "",
      postal_code: "",
      city: "",
      country: "",
    });

    localStorage.removeItem("createCustomerFormData");
    setErrorMessage("");
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
          required
        />
        <Input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          name="street_address"
          placeholder="Street Address"
          value={formData.street_address}
          onChange={handleChange}
          required
        />
      </Inputbox>
      <Inputbox>
        <Input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={formData.postal_code}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </Inputbox>
      {errorMessage && <FormError>{errorMessage}</FormError>}
      <AddToCartBtn type="submit" onClick={handleSubmit}>
        Fortsätt till checkout
      </AddToCartBtn>
    </Form>
  );
};

export default CreateCustomer;
