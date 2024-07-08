const borderClass = "pb-4 border-b border-utils-divider border-opacity-50";

export function Paragraph(props)
{
    return(
        <p 
            className={[
                "text-type-text my-9 font-medium",
                props.border ? borderClass : null,
                props.className ?? "",
            ].join(" ")}
        >
            {props.children}
        </p>
    )
}