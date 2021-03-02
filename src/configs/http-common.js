const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:8081/",
  headers: {
    "Content-type": "application/json",
  },
});

export { http };
