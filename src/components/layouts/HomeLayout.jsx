import { FooterView } from "../Footer";
import Navigation from "../Navigation";

export function HomeLayout(props)
{
    return(
        <FooterView>
            <Navigation bg={props.showBg}/>
            {props.children}
        </FooterView>
    )
}