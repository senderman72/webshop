import { useState, useEffect } from "react";
import { getOrder } from "../services/orderService/getOrder";
import { IOrder } from "../models/IOrder";

const useOrder = (id: number) => {
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrder(id);
        console.log(data);
        setOrder(data);
      } catch {
        console.log("Kunde inte hämta ordern.");
      }
    };
    fetchOrder();
  }, [id]);

  return { order, setOrder };
};

export default useOrder;
