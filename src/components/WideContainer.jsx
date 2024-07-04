export function WideContainer(props)
{
    return(
        <div className={`mx-auto max-w-full px-8 ${props.ultraWide ? "w-[1300px] sm:px-16" : "w-[900px] sm:px-8"} ${props.className || ""}`}>
            {props.children}
        </div>
    )
}