import BrandPill from "./BrandPill"
import { Icon ,Icons } from "./Icon"
import { app } from "./utils/constants"
import { WideContainer } from "./WideContainer"

export function Footer()
{
    return(
        <footer className="mt-16 border-t border-type-divider py-16 md:py-8">
            <WideContainer ultraWide className="grid md:grid-cols-2 gap-16 md:gap-8">
                <div>
                    <div className="inline-block">
                        <BrandPill/>
                    </div>
                    <p className="mt-4 lg:max-w-[400px]">Watch your favourite asian shows and movies with this open source streaming app.</p>
                </div>
                <div className="md:text-right">
                    <h3 className="font-semibold text-type-emphasis">
                        Disclaimer
                    </h3>
                    <p className="mt-3">{app.name} does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. {app.name} is not responsible for any media files shown by the video providers.</p>
                </div>
                <div className="flex flex-wrap gap-[0.5rem] -ml-3">
                    <a
                        href={`/github`}
                        target={"_blank"}
                        rel="noreferrer"
                        className="tabbable rounded py-2 px-3 inline-flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-type-emphasis"
                    >
                        <Icon icon={Icons.GITHUB} className="text-2xl"/>
                        <span className="font-medium">GitHub</span>
                    </a>
                    <a
                        href={`/instagram`}
                        target={"_blank"}
                        rel="noreferrer"
                        className="tabbable rounded py-2 px-3 inline-flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-type-emphasis"
                    >
                        <Icon icon={Icons.INSTAGRAM} className="text-2xl"/>
                        <span className="font-medium">Instagram</span>
                    </a>
                </div>
            </WideContainer>
        </footer>
    )
}

export function FooterView(props)
{
    return(
        <div className={["flex min-h-screen flex-col", props.className || ""].join(" ",)}>
            <div style={{flex: "1 0 auto"}}>{props.children}</div>
            <Footer/>
        </div>
    )
}