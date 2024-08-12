window.onload = function () {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "ip-address"
      ).textContent = `Your IP Address is: ${data.ip}`;
    })
    .catch((error) => {
      document.getElementById("ip-address").textContent =
        "Failed to fetch IP address. Please try again.";
      console.error("Error fetching IP:", error);
    });
};
