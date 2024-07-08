import { Icons } from "../Icon";
import { ErrorContainer, ErrorLayout } from "../layouts/ErrorLayout";
import { IconPill } from "../layouts/IconPill";
import Navigation from "../Navigation";
import { Title } from "../text/Title";
import { Paragraph } from "../utils/Text";

export function NotFoundPage()
{
    return(
        <div className="relative flex flex-1 flex-col">
            <Navigation />
            <div className="flex h-full flex-1 flex-col items-center justify-center p-5 text-center">
                <ErrorLayout>
                    <ErrorContainer>
                        <IconPill icon={Icons.EYE_SLASH}>Not Found</IconPill>
                        <Title>Couldn't find that page</Title>
                        <Paragraph>We looked everywhere: under the bins, in the closet, behind the proxy but ultimately couldn't find the page you are looking for.</Paragraph>
                    </ErrorContainer>
                </ErrorLayout>
            </div>
        </div>
    )
}