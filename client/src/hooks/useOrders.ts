import { useEffect, useState } from "react";
import { IOrder } from "../models/IOrder";
import { getOrders } from "../services/orderService/getOrders";

const useOrders = () => {
  const [orders, setOrders] = useState<IOrder[] | undefined>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch {
        console.log("Kunde inte hämta produkterna.");
      }
    };
    fetchOrders();
  }, []);

  return { orders, setOrders };
};

export default useOrders;
