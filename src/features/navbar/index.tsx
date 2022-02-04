import styled from '@emotion/styled'

const Header = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
`
const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 30px 20px;
  @media (min-width: 481px) {
    width: 450px;
    height: 80px;
    padding: 30px 0px;
  }
  @media (min-width: 769px) {
    width: 769px;
    height: 90px;
    padding: 30px 20px;
  }
  @media (min-width: 1025px) {
    width: 1025px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 114px;
    padding: 44px 1082px 42px 150px;
  }
`
const Logo = styled.div`
  width: 208px;
  height: 28px;
  object-fit: contain;
  font-family: Baskerville;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
  @media (min-width: 481px) {
    font-size: 26px;
  }
  @media (min-width: 769px) {
    font-size: 28px;
  }
`
function Navbar() {
  return (
    <Header>
      <Nav>
        <Logo>HACKER NEWS</Logo>
      </Nav>
    </Header>
  );
}
export default Navbar;