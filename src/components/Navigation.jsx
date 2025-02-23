import BrandPill from "./BrandPill";
import IconPatch from "./Buttons/IconPatch";
import { Icons } from "./Icon";
import Lightbar from "./utils/Lightbar";

export default function Navigation(props) {
    return (
        <>
            {!props.noLightbar ? (
                <div className="absolute inset-x-0 top-0 flex h-[88px] items-center justify-center"
                    style={{ top: "0px" }}
                >
                    <div className="absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0">
                        <Lightbar/>
                    </div>
                </div>
            ) : null}

            <div
                className="fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]"
                style={{ top: "0px" }}
            >
                <div className={`fixed left-0 right-0 h-20 flex items-center ${props.doBackground ? "bg-background-main border-b border-utils-divider border-opacity-50" : null}`}>
                    {props.doBackground ? (
                        <div className="absolute w-full h-full inset-0 overflow-hidden">
                            {/* Blur Ellipsis */}
                        </div>
                    ) : null}
                    <div className="opacity-0 absolute inset-0 block h-20 pointer-events-auto" />
                    <div
                        className={`${props.bg ? "opacity-100" : "opacity-0"} absolute inset-0 block h-24 bg-background-main transition-opacity duration-300`}
                    >
                        <div className="absolute -bottom-24 h-24 w-full bg-gradient-to-b from-background-main to-transparent" />
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]"
                style={{ top: "0px" }}
            >
                <div className="fixed left-0 right-0 flex items-center">
                    <div className="px-7 py-5 relative z-[60] flex flex-1 items-center justify-between">
                        <div className="flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto">
                            <a
                                className="block tabbable rounded-full text-xs ssm:text-base"
                                href={"/"}
                            >
                                <BrandPill clickable />
                            </a>
                            <a
                                href={"/instagram"}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-white tabbable rounded-full"
                            >
                                <IconPatch icon={Icons.INSTAGRAM} clickable downSized />
                            </a>
                            <a
                                href={"/github"}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-white tabbable rounded-full"
                            >
                                <IconPatch icon={Icons.GITHUB} clickable downSized />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}