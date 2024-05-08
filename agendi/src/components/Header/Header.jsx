import HeaderLink from "../HeaderLinks/HeaderLinks";
import agenda from "../../assets/agenda.png"
import { HeaderInfo, Logo, StyledLink, LinkOption, Image, ScheduleText} from "./HeaderStyles";
function Header() {
    return (
        <HeaderInfo>        
            <StyledLink to="./">
                <div>
                    <Logo>
                        AgendI
                    </Logo>
                </div>
            </StyledLink>
            <nav>
                <HeaderLink url="./agendamentos">
                    <LinkOption>
                        <Image src={agenda} alt="Agenda" />
                        <ScheduleText>
                            Meus agendamentos
                        </ScheduleText>
                    </LinkOption>
                </HeaderLink>
            </nav>
        </HeaderInfo>
    );
}

export default Header;