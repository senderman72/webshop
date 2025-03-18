import { remove } from "../serviceBase";

export const deleteOrderItems = async (id: number) => {
  const success = await remove(`http://localhost:3000/order-items/${id}`);

  if (success) {
    console.log("Ordern har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort ordern");
  }
};
