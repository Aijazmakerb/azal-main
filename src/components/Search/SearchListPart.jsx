import { useEffect, useState } from "react";
import { useAsyncFn } from "react-use";
import { searchForMedia } from "../../backend/search";
import IconPatch from "../Buttons/IconPatch";
import { Icons } from "../Icon";
import { SectionHeading } from "../layouts/SectionHeading";
import { MediaCard } from "../media/MediaCard";
import { MediaGrid } from "../media/MediaGrid";
import { SearchLoadingPart } from "./SearchLoadingPart";

function SearchSuffix(props)
{
    const icon = props.failed ? Icons.WARNING : Icons.EYE_SLASH;
    
    return(
        <div className="mb-24 mt-40  flex flex-col items-center justify-center space-y-3 text-center">
            <IconPatch
                icon={icon}
                className={`text-xl ${
                    props.failed ? "text-red-400" : "text-type-logo"
                }`}
            />

            {/* Standard Suffix */}
            {!props.failed ? (
                <div>
                    {(props.results ?? 0) > 0 ? (
                        <p>That's all we have!</p>
                    ) : (
                        <p>No results sweetie!</p>
                    )}
                </div>
            ) : null}

            {/* Error result */}
            {props.failed ? (
                <div>
                    <p>We are fucked, contact developer</p>
                </div>
            ) : null}
        </div>
    )
}

export function SearchListPart({searchQuery})
{
    const [results, setResults] = useState([]);
    const [state, exec] = useAsyncFn((query) => searchForMedia(query));

    useEffect(() => {
        async function runSearch(query)
        {
            const searchResults = await exec(query);
            if(!searchResults) return;
            setResults(searchResults);
        }

        if(searchQuery !== "") runSearch(searchQuery);
    }, [searchQuery, exec])

    if (state.loading) return <SearchLoadingPart />;
    if (state.error) return <SearchSuffix failed />;
    if (!results) return null;
    
    return(
        <div>
            {results.length > 0 ?(
                <div>
                    <SectionHeading
                        title="Search Results"
                        icon={Icons.SEARCH}
                    />
                    <MediaGrid>
                        {results.map((item) => (
                            <MediaCard media={item}/>
                        ))}
                    </MediaGrid>
                </div>
            ) : null}
            
            <SearchSuffix results={results.length}/>
        </div>
    )
}