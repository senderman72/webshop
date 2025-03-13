import { remove } from "../serviceBase";

export const deleteCustomer = async (id: number) => {
  const success = await remove(`http://localhost:3000/customers/${id}`);

  if (success) {
    console.log("Kunden har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort kunden.");
  }
};
