import { Icon } from "../Icon";

export function SectionHeading(props) 
{
    return(
        <div className={props.className}>
            <div className="mb-5 flex items-center">
                <p className="flex flex-1 items-center font-bold uppercase text-type-text">
                    {props.icon ? (
                        <span className="mr-2 text-xl">
                            <Icon icon={props.icon}/>
                        </span>
                    ) : null}
                    {props.title}
                </p>
                {props.children}
            </div>
        </div>
    )
}