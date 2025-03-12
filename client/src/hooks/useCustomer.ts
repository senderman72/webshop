import { useState, useEffect } from "react";
import { ICustomer } from "../models/ICustomer";
import { getCustomers } from "../services/customerService/getCustomers";
import { createCustomer } from "../services/customerService/createCustomer";

const useCustomer = () => {
  const [customers, setCustomers] = useState<ICustomer[] | undefined>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch {
        console.log("Kunde inte hämta kunderna.");
      }
    };
    fetchCustomers();
  }, []);

  const addCustomer = async (customer: ICustomer) => {
    try {
      await createCustomer(customer);

      setCustomers((prev) => (prev ? [...prev, customer] : [customer]));
    } catch {
      console.log("Kunde inte skapa kund.");
    }
  };

  return { customers, addCustomer };
};

export default useCustomer;
