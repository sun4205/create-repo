
function checkEmailAvailable(email) {
  return request(`${baseUrl}/check-email?email=${encodeURIComponent(email)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}