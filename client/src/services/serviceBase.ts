export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    console.log("Färdig med att hämta data:", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
