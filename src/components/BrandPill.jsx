import { Icon, Icons } from "./Icon";
import { app } from "./utils/constants";

export default function BrandPill(props)
{
    return(
        <div className={`flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo ${props.backgroundClass ?? "bg-pill-background bg-opacity-50"} ${props.clickable ? "transition-[transform,background-color] hover:scale-105 hover:bg-pill-backgroundHover backdrop-blur-lg hover:text-type-logo active:scale-95" : ""}`}>
            <Icon className="text-xl" icon={Icons.MOVIE_WEB}/>
            <span className={["font-semibold text-white", props.hideTextOnMobile ? "hidden sm:block" : ""].join(" ")}>
                {app.name}
            </span>
        </div>
    )
}