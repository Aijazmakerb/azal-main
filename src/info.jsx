import axios from "axios";

import { useParams } from "react-router-dom";

export function Info() {

    const { id } = useParams();

    return (
        <iframe className="h-[100vh]" src={`https://vidsrc.pro/embed/movie/${id}`} frameborder="0"></iframe>
    )
}