

const https = require("https");

function fetchStockData(apiUrl, callback) {
  const request = https.request(apiUrl, (response) => {
    if (response.statusCode < 200 || response.statusCode >= 300) {
      console.error(`HTTP Status Code: ${response.statusCode}`);
      process.exit(2); 
    }

    let data = "";

    response.on("data", (chunk) => {
      data += chunk.toString();
    });

    response.on("end", () => {
      if (response.headers["content-type"] === "application/json") {
        try {
          data = JSON.parse(data);
        } catch (err) {
          console.error("Error parsing JSON:", err.message);
          process.exit(3); 
        }
      }

      callback(null, data);
    });
  });

  request.on("error", (err) => {
    console.error("Request error:", err.message);
    callback(err);
  });

  request.end();
}

module.exports = {
  fetchStockData,
};
