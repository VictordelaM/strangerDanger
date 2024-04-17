export const likeImage = async (url, data) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const updatedData = await response.json();
      console.log("Resource updated:", updatedData);
      // Handle the updated data
    } else {
      console.error("Error updating resource:", response.statusText);
      // Handle the error
    }
  } catch (error) {
    console.error("Error making request:", error);
    // Handle the network or other errors
  }
};
