import styled from "@emotion/styled";
import tw from "";

export const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

export const NavItem = styled.a`
  color: #ffff;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  ${tw`underline hover:underline-offset-4`}
`;
