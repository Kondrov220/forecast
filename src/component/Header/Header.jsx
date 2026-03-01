import styled from 'styled-components';
import Sing from "../Sing-up/Sing-up"
import Log from '../LogIn/LogIn';
import Acount from '../Acount/Acount';
import logo from '../../img/logo.png'
import icon from '../../img/icon.png'
import { useState } from 'react';
const HeaderBox = styled.div`
padding: 15px 0;

`;

const Container = styled.div`
position: reletive;
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
      justify-content: center;
    align-items: center;
      @media (max-width: 768px) {
  padding-left: 10px;
  padding-right: 10px;
      max-width: 568px;
  }
  @media (max-width: 425px) {
  padding-left: 15px;
  padding-right: 15px;
      max-width: 345px;
}
`;

const Logo = styled.img`
max-width: 82px;
height: 56px;
  @media (max-width: 768px) {
max-width: 54px;
height: 36px;
  }
  @media (max-width: 425px) {
  max-width: 34px;
height: 22px;}
`
const Box = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
  @media (max-width: 425px) {
display:none;
}
`
const Button = styled.button`
  &:hover {
       transform: scale(110%);
  }
display: ${props => (props.isLogin ? "none" : "flex")};
max-width: 89px;
height: 35px;
border-radius: 10px;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
gap: 10px;
background: #FFB36C;
margin: 10px;
  @media (max-width: 768px) {
border-radius: 10px;
padding: 8px 16px;
max-width: 73px;
height: 28px;
font-size: 10px;
  }
font-family: var(--second-family);
font-weight: 500;
font-size: 12px;
color: #000;
  @media (max-width: 425px) {
display:none;
}

`
const Icon = styled.img`
width: 100%;
border-radius: 100%;
`

const IconButton = styled.button`
  &:hover {
       transform: scale(110%);
  }
max-width: 50px;
height: 50px;
background: transparent;
border-radius: 100%;
  @media (max-width: 768px) {
max-width: 40px;
height: 40px;
  }
  @media (max-width: 425px) {
display:none;
}
`

const Text = styled.a`
font-family: var(--second-family);
font-weight: 500;
font-size: 12px;
color: #000;
  @media (max-width: 768px) {
font-size: 10px;
  }
  @media (max-width: 425px) {
display:none;
}
`

const Menu = styled.button`
display: none;
  @media (max-width: 425px) {
  display: flex;
font-family: var(--second-family);
font-weight: 500;
font-size: 10px;
color: #000;
margin-left:auto;
}
`

const MenuBox = styled.div`
display:none;
  @media (max-width: 425px) {
  z-index:3;
  position:absolute;
 top: 52px;
  left:0;
width: 100%;
height: 146px;
background: #e6e6e6;
justify-content: center;
align-items: center;
display: ${props => (props.open ? "flex" : "none")};
}
`

const BoxMenu = styled.ul`
display: flex;
flex-direction:column;
justify-content: center;
align-items: start;
gap: 20px;
`

const BoxeMenu = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 20px;
margin-left:60px;
`

const ButtonMenu = styled.button`
display: ${props => (props.isLogin ? "none" : "flex")};
border-radius: 10px;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
gap: 10px;
background: #FFB36C;
margin: 10px;
border-radius: 10px;
padding: 8px 16px;
max-width: 73px;
height: 28px;
font-size: 10px;
 

  @media (max-width: 425px) {
display:flex;
font-family: var(--second-family);
font-weight: 500;
font-size: 10px;
color: #000;
}

`

const IconButtonMenu = styled.button`

display:none;
  @media (max-width: 425px) {
display:flex;
max-width: 40px;
height: 40px;
background: transparent;
border-radius: 100%;
}
`

const TextMenu = styled.a`

display:none;
  @media (max-width: 425px) {
font-family: var(--second-family);
font-weight: 500;
font-size: 10px;
color: #000;
display:flex;
}
`


function Header({ isLogin, setIsLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcountOpen, setIsAcountOpen] = useState(false);
const [isLoginOpen, setIsLoginOpen] = useState(false);
const [menu, setMenu] = useState(false);
localStorage.setItem("login", isLogin);
  return (
    <HeaderBox>
       <div className="container">
      <Container>
        <Logo src={logo} alt="logo" />
        <Box>
          <li>
            <Text>Who we are</Text>
          </li>
          <li>
            <Text  href='#footer'>Contacts</Text>
          </li>
          <li>
            <Text>Menu</Text>
          </li>
        </Box>
        <Button isLogin={isLogin} onClick={() => setIsOpen(true)}>Sing Up</Button>
        <IconButton onClick={() => setIsAcountOpen(true)}>
          <Icon src={icon} alt="" />
        </IconButton>
        <Menu onClick={() => {
          if(!menu){
            setMenu(true)
          }else{
            setMenu(false)
          }
        }}>
          Menu
        </Menu>

      </Container>        <MenuBox open={menu}>
           <BoxMenu>
          <li>
            <TextMenu> Who we are</TextMenu>
          </li>
          <li>
            <TextMenu  href='#footer'>Contacts</TextMenu>
          </li>
          <li>
            <TextMenu>Menu</TextMenu>
          </li>
        </BoxMenu>
        <BoxeMenu>
             <IconButtonMenu onClick={() => setIsAcountOpen(true)}>
          <Icon src={icon} alt="" />
        </IconButtonMenu>
        <ButtonMenu isLogin={isLogin} onClick={() => setIsOpen(true)}>Sing Up</ButtonMenu>
     
        </BoxeMenu>
        </MenuBox>
      <Sing open={isOpen} setOpen={setIsOpen} isLogin={isLogin} setIsLogin={setIsLogin} setIsLoginOpen={setIsLoginOpen}></Sing>
<Log open={isLoginOpen} setOpen={setIsLoginOpen} isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Acount openA={isAcountOpen} setOpenA={setIsAcountOpen}  isLogin={isLogin} setIsLogin={setIsLogin} open={isOpen}  setOpen={setIsOpen}
      />
      </div>
    </HeaderBox>
  );
}

export default Header;
