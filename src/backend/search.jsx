import axios from "axios";

export async function searchForMedia(query)
{
    const data = await (await axios.get(`http://localhost:3001/search/${query.toLowerCase()}`)).data;
    return data;
}