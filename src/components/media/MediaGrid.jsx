import { forwardRef } from "react";

export const MediaGrid = forwardRef((props, ref) => {
    return(
        <div 
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
            ref={ref}
        >
            {props.children}
        </div>
    )
})