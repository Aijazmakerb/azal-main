import axios from "axios";

export async function searchForMedia(query)
{
    const data = await (await axios.get(`https://azal-api.onrender.com/search/${query.toLowerCase()}`)).data;
    return data;
}