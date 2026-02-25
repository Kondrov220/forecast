import styled from "styled-components";

import cat from '../../img/cat.png'
import dog from '../../img/dog.png'
import ghosts from '../../img/ghosts.png'
import man from '../../img/man.png'

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
      justify-content: center;
    align-items: start;
    margin-top: 60px;
    margin-bottom: 80px;
 @media (max-width: 768px) {
  padding-left: 0px;
  padding-right: 0px;
}
`

const Title = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 20px;
color: #000;
margin-bottom:40px;
@media (max-width: 768px) {
font-size: 16px;
margin-left:20px;
}
`

const Text = styled.p`
margin-top:20px;
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
color: #000;
            @media (max-width: 768px) {
font-size: 12px;
}
  @media (max-width: 425px) {
max-width:207px;
  }
`
const Button = styled.button`
border-radius: 10px;
padding: 8px 18px;
background: #ffb36c;
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
color: #000;
@media (max-width: 768px) {
font-size: 12px;
border-radius: 10px;
padding: 8px 16px;
width: 93px;
height: 38px;
margin-top:20px;
margin-left:20px;
}
`

const Ul = styled.ul`
display: flex;
gap: 20px;
@media (max-width: 768px) {
flex-wrap:wrap;
      justify-content: center;
    align-items: center;
}
`

const Li = styled.li`
display: flex;
  flex-direction: column;
      justify-content: center;
    align-items: center;
`

function Pets() {
  return (
    <Container>
      <Title>Interacting with our pets</Title>
      <Ul>
        <Li>
            <img src={ghosts} alt="" />
            <Text>Rescue pups pose as ghosts in festive photo shoot</Text>
        </Li>
        <Li>
            <img src={cat} alt="" />
            <Text>Cat interrupts morning coffee on sunny Washington morning</Text>
        </Li>
        <Li>
            <img src={man} alt="" />
            <Text>New study finds dogs pay more attention to women</Text>
        </Li>
        <Li>
            <img src={dog} alt="" />
            <Text>Petting dogs gives health benefit, even if they are not yours</Text>
        </Li>
      </Ul>
      <Button>See more</Button>
    </Container>
  );
}

export default Pets;
