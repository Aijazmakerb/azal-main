import { Icon } from "../Icon";

export default function IconPatch(props)
{
    const clickableClasses = props.clickable ? "cursor-pointer hover:scale-110 hover:bg-pill-backgroundHover hover:text-white active:scale-125" : "";
    const transparentClasses = props.transparent ? "bg-opacity-0 hover:bg-opacity-50" : "";
    const activeClasses = props.active ? "bg-pill-backgroundHover text-white" : "";
    const sizeClasses = props.downSized ? "h-10 w-10" : "h-12 w-12";

    return(
        <div className={props.className || undefined} onClick={props.onClick}>
            <div className={`flex items-center justify-center rounded-full border-2 border-transparent bg-pill-background bg-opacity-100 transition-[background-color,color,transform,border-color] duration-75 ${transparentClasses} ${clickableClasses} ${activeClasses} ${sizeClasses}`}>
                <Icon icon={props.icon}/>
            </div>
        </div>
    )
}