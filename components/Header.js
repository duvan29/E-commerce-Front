import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration: none;
`;

const StyledNav= styled.nav`
   display: flex;
   gap: 10px;
`;

const NavLink = styled(Link)`
    color:#aaa;
    text-decoration: none;
`;


export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href="/">Ecommerce</Logo>
                    <StyledNav>
                        <NavLink  href="/">Home</NavLink>
                        <NavLink href="/produts">All Products</NavLink>
                        <NavLink href="/category">Category</NavLink>
                        <NavLink href="/account">Account</NavLink>
                        <NavLink href="/cart">Cart (0)</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}