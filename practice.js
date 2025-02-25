function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`);
}

const addItem = ({ name, weather, imageUrl }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
};

const removeItem = (_id) => {
  const token = localStorage.getItem("jwt");
  console.log("Deleting item with _id:", _id);
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};




