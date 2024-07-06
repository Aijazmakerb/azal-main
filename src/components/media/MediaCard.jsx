import classNames from "classnames";
import { Link } from "react-router-dom";
import IconPatch from "../Buttons/IconPatch";
import { Icons } from "../Icon";
import { DotList } from "../text/DotList";
import { Flare } from "../utils/Flare";

function MediaCardContent({media})
{
    const canLink = true;
    const closable = false;
    const dotListContent = [media.type, media.year];

    return(
        <Flare.Base
            className={`group -m-3 mb-2 rounded-xl bg-background-main transition-colors duration-100 focus:relative focus:z-10 ${
                canLink ? "hover:bg-mediaCard-hoverBackground tabbable" : ""
            }`}
            tabIndex={canLink ? 0 : -1}
            onKeyUp={(e) => e.key === "Enter" && e.currentTarget.click()}
        >
            <Flare.Light
                flareSize={300}
                cssColorVar="--colors-mediaCard-hoverAccent"
                backgroundClass="bg-mediaCard-hoverBackground duration-100"
                className={classNames({
                    "rounded-xl bg-background-main group-hover:opacity-100": canLink,
                })}
            />
            <Flare.Child
                className={`pointer-events-auto relative mb-2 p-3 transition-transform duration-100 ${
                    canLink ? "group-hover:scale-95" : ""
                }`}
            >
                <div
                    className={classNames(
                        "relative mb-4 pb-[150%] w-full overflow-hidden rounded-xl bg-mediaCard-hoverBackground bg-cover bg-center transition-[border-radius] duration-100",
                        {
                            "group-hover:rounded-lg": !closable,
                        },
                    )}
                    style={{
                        backgroundImage: `url(${media.img})`
                    }}
                >
                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-mediaCard-badge bg-opacity-80 transition-opacity duration-200 ${
                            closable ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                    >
                        <IconPatch
                            clickable
                            className="text-2xl text-mediaCard-badgeText"
                            onClick={() => closable && onClose?.()}
                            icon={Icons.X}
                        />
                    </div>
                </div>
                <h1 className="mb-1 line-clamp-3 max-h-[4.5rem] text-ellipsis break-words font-bold text-white">
                    <span>{media.title}</span>
                </h1>
                <DotList className="text-xs" content={dotListContent}/>
            </Flare.Child>
        </Flare.Base>
    )
}

export function MediaCard(props)
{
    const content = <MediaCardContent {...props} />;

    return(
        <Link
            to={props.media.id}
            className={"tabbable"}
        >
            {content}
        </Link>
    )
}