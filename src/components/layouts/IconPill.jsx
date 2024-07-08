import { Icon, Icons } from "../Icon";

export function IconPill(props)
{
    return(
        <div className="bg-pill-background bg-opacity-50 px-4 py-2 rounded-full text-white flex justify-center items-center">
            <Icon
                icon={props.icon ?? Icons.WAND}
                className="mr-3 text-xl text-type-link"
            />
            {props.children}
        </div>
    )
}