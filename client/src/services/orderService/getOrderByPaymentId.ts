export const getOrderByPaymentId = async (paymentId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/orders/payment/${paymentId}`
    );

    if (!response.ok) {
      throw new Error(`Order not found: ${response.statusText}`);
    }

    const orderData = await response.json();
    return orderData;
  } catch (error) {
    console.error("Error fetching order data:", error);
    throw error;
  }
};
