const axios = require("axios");
const getUser = async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
getUser();
