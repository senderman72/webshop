export const getCustomerByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/customers/email/${email}`
    );
    if (!response.ok) {
      return null;
    }
    const customer = await response.json();

    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    return null;
  }
};
