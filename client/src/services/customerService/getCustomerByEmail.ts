export const getCustomerByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/customers/email/${email}`
    );
    if (!response.ok) {
      throw new Error("Kunde inte hitta kunden.");
    }
    const customer = await response.json();

    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw error;
  }
};
