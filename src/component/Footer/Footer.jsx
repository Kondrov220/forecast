import styled from "styled-components";

import logo from '../../img/logo.png'
import insta from '../../img/insta.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'

const Foot = styled.div`
height: 179px;
background: #ffb36c;
  margin: 0 auto;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
    align-items: center;
                  @media (max-width: 768px) {
  padding-left: 100px;
}
    @media (max-width: 425px) {
    flex-direction:column;
      position: relative;
        justify-content: center;
  align-items: center; 
  gap:20px; }
`

const Logo = styled.img`
width: 90px;
height: 62px;
  @media (max-width: 425px) {
width: 50px;
height: 34px;
  position: absolute;
  left: 50px;
  top: 30px;
  }
`

const Title = styled.p`
font-family: var(--second-family);
font-weight: 500;
font-size: 16px;
color: #000;
margin-bottom:10px;
  @media (max-width: 425px) {
font-size:12px;
  }
`
const Text = styled.p`
font-family: var(--second-family);
font-weight: 500;
font-size: 12px;
color: #000;
  @media (max-width: 425px) {
font-size:8px;
  }
`
const Ul = styled.ul`
display: flex;
gap:20px;
`

const Box = styled.div`
margin-left: 100px;
  @media (max-width: 425px) {
margin-left: 75px;
    flex-direction:column;
     display:flex;
        justify-content: center;
  align-items: center; 
  width: 145px;
height: 67px;
  }
`


function Footer() {
  return (
    <Foot>
      <Logo src={logo} alt="" />
      <Box>
      <Title>Address</Title>
      <ul>
        <li>
            <Text>Svobody str. 35</Text>
        </li>
        <li>
            <Text>Kyiv</Text>
        </li>
        <li>
            <Text>Ukraine</Text>
        </li>
      </ul>
      </Box>
      <Box>
      <Title>Contact us</Title>
      <Ul>
        <li><img src={insta} alt="" /></li>
        <li><img src={facebook} alt="" /></li>
        <li><img src={whatsapp} alt="" /></li>
      </Ul>
      </Box>
    </Foot>
  );
}

export default Footer;
