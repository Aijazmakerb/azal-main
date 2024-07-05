export function DotList(props)
{
    return(
        <p className={`font-semibold text-type-secondary ${props.className || ""}`}>
            {props.content.map((item, index) => (
                <span key={item}>
                    {index !== 0 ? (
                        <span className="mx-[0.6em] text-[1em]">&#9679;</span>
                    ) : null}
                    {item}
                </span>
            ))}
        </p>
    )
}