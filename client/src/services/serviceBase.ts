export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const create = async <T>(url: string, body: unknown): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
