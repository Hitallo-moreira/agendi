import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLink from "../components/HeaderLinks";
import agenda from "../assets/agenda.png"

const HeaderInfo = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #05B387;
    
    color: #fff;
    font-weight: 600;
    height: 80px;
    width: 100%;
    position: sticky;
    margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Logo = styled.div`
    margin-left: 4rem;
    font-size: 26px;    
    color: #fff;
`;

const LinkOption = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 5px;
`;

const Image = styled.img`
    height: auto;
    width: 27px;
`;

const ScheduleText = styled.span`
    margin-top: 5px;
`;

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