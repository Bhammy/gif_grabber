import axios from "axios";
const apiKey = require("../apiKey.json");

export const searchGiphy = async (searchTerm) => {
    const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey.key}&q=${searchTerm}&limit=4`);
    console.log(data);
    return data.data.map((gif) => {
        return gif.images.fixed_height.url;
    })
};
