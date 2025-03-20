import React, { useState, useEffect } from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  Form,
  Input,
  Inputbox,
  FormError,
} from "../../styled/styledAdmin/customerStyled/CreatCustomerForm";
import { AddToCartBtn } from "../../styled/styledProducts/ProductCards";
import { CustomerCreate, ICustomer } from "../../../models/ICustomer";
import { getCustomerByEmail } from "../../../services/customerService/getCustomerByEmail";

interface CreateCustomerProps {
  onAddCustomer: (newCustomer: ICustomer) => void;
  onProceedToCheckout: (customer: ICustomer) => void;
}

const CreateCustomer = ({
  onAddCustomer,
  onProceedToCheckout,
}: CreateCustomerProps) => {
  const { addCustomer } = useCustomer();

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      // Check if the customer already exists by email
      const existingCustomer = await getCustomerByEmail(formData.email);

      if (existingCustomer && existingCustomer.id) {
        // If customer exists, proceed to checkout with the existing customer
        onProceedToCheckout(existingCustomer);
        return;
      } else {
        const newCustomer: ICustomer = { ...formData };

        await addCustomer(newCustomer);

        onProceedToCheckout(newCustomer);

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
      }
    } catch (error) {
      setErrorMessage("Ett fel uppstod vid hämtning av kunddata.");
      console.error("Error fetching or creating customer:", error);
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
      <AddToCartBtn type="submit">Fortsätt till checkout</AddToCartBtn>
    </Form>
  );
};

export default CreateCustomer;
