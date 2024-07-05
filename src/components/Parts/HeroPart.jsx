import { useEffect, useState, useCallback, useRef } from "react";
import { HeroTitle } from "../HeroTitle";

import { useWindowSize } from "react-use";
import Sticky from 'react-sticky-el';
import SearchBarInput from "../forms/SearchBar";
import { useSlashFocus } from "../hooks/useSlashFocus";

const titles = {
    morning:[
        "What would you like to watch this morning?",
        "Don't you have classes today?"
    ],
    day:[
        "What would you like to watch this afternoon?",
        "East or West Han-So-Hee is best!"
    ],
    night:[
        "Wanna feel guilty? Watch Nevertheless",
        "Be a big person just like Samantha & Rachel"
    ]
}

const placeholders = [
    "What do you want to watch?",
    "What do you want to explore?",
    "What's on your watchlist?",
    "What's your favorite movie?",
    "What's your favorite series?"
]

function getTimeOfDay(date) {
    const hour = date.getHours();
    if (hour < 5) return "night";
    if (hour < 12) return "morning";
    if (hour < 19) return "day";
    return "night";
}

export default function HeroPart({setIsSticky, searchParams})
{
    const [title, setTitle] = useState("");
    const [placeholder, setPlaceholder]= useState("");

    const {width} = useWindowSize();
    const topSpacing = 16;
    const [stickyOffset, setStickyOffset] = useState(topSpacing);

    const stickStateChanged = useCallback(
        (isFixed) => {
            setIsSticky(isFixed);
        },
        [setIsSticky],
    );

    useEffect(() => {
        if(width > 1200)
        {
            setStickyOffset(topSpacing);
        }else{
            setStickyOffset(topSpacing + 60);
        }
    }, [width]);

    useEffect(() => {
        const time = getTimeOfDay(new Date());
        const randomIndex = Math.floor(Math.random() * titles[time].length);
        setTitle(titles[time][randomIndex]);
        setPlaceholder(placeholders[Math.floor(Math.random() * placeholders.length)])
    }, []);

    const [search, setSearch, setSearchUnFocus] = searchParams;
    const inputRef = useRef(null);
    useSlashFocus(inputRef);

    return(
        <div className="mx-auto w-[600px] max-w-full px-8 sm:px-0">
            <div className="mt-44 space-y-16 text-center">
                <div className="relative z-10 mb-16">
                    <HeroTitle className="mx-auto max-w-md">{title}</HeroTitle>
                </div>
                <div className="relative h-20 z-30">
                    <Sticky
                        topOffset={stickyOffset * -1}
                        stickyStyle={{
                            paddingTop: `${stickyOffset}px`
                        }}
                        onFixedToggle={stickStateChanged}
                    >
                        <SearchBarInput
                            ref={inputRef}
                            onChange={setSearch}
                            value={search}
                            onUnFocus={setSearchUnFocus}
                            placeholder={placeholder}
                        />
                    </Sticky>
                </div>
            </div>
        </div>
    )
}