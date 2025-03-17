import { remove } from "../serviceBase";

export const deleteOrder = async (id: number) => {
  const success = await remove(`http://localhost:3000/orders/${id}`);

  if (success) {
    console.log("Ordern har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort ordern");
  }
};
