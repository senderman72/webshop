import { useState, useEffect } from "react";

import { ICustomer } from "../models/ICustomer";
import { getCustomers } from "../services/customerService/getCustomers";

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

  return { customers };
};

export default useCustomer;
