import { Icons } from "./Icon";
import { SectionHeading } from "./layouts/SectionHeading";
import { MediaCard } from "./media/MediaCard";
import { MediaGrid } from "./media/MediaGrid";

const data = [
    {
        img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        id: "/447332",
        title: "A Quiet Place",
        type: "Movie",
        year: "2018",
        url: "/fQp9BHhYd0N5ewdKf2N4bT4PMRw7HQVAfG57AH9ddUF3Lg"
    },
    {
        img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        id: "/520763",
        title: "A Quiet Place Part II",
        type: "Movie",
        year: "2021",
        url: "/fQpxCnhbeE15ewdKf2N4bT4PMRw7HQVAfG56BXtac0B3Lg"
    }
]

export function AzalsPlaylist() {
    return (
        <div>
            <SectionHeading
                title="Azal's Playlist"
                icon={Icons.BOOKMARK}
            />
            <MediaGrid>
            {data.map((v) => (
                <MediaCard media={v}/>
            ))}
            </MediaGrid>
        </div>
    )
}