import styled from "styled-components";
import "../../App.css"
import clouds from '../../img/clouds.png'
import overcast from '../../img/overcast.png'
import rain from '../../img/rain.png'
import scattered from '../../img/scattered.png'
import clear from '../../img/clear.png'

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
              @media (max-width: 768px) {
  padding-left: 0px;
  padding-right: 0px;
}
`;

const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
padding: 0 15px;
        @media (max-width: 768px) {
gap:15px;
}

`

const Li = styled.li`
border-radius: 10px;
max-width: 886px;
width:100%;
height: 47px;
background: #d9d9d9;
display: flex;
align-items: center;
padding:0 50px;
        @media (max-width: 768px) {
border-radius: 10px;
max-width: 544px;
height: 40px;
padding:0 10px;
}
  @media (max-width: 425px) {
  flex-direction:column;
border-radius: 10px;
width: 100px;
height: 140px;
    justify-content: space-between;
    padding: 10px 0 ;
  }
`

const Text = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
color: #000;
        @media (max-width: 768px) {
font-size:14px;
}
  @media (max-width: 425px) {
font-size:10px;
  }
`
const Img = styled.img`
width: 45px;
height: 45px;
  @media (max-width: 425px) {
width: 30px;
height: 30px;
  }
`
const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-right: auto;
  @media (max-width: 425px) {
  flex-direction:column;
margin-right: 0;
  }
`
const Title = styled.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 16px;
color: #000;
margin-left:75px;
margin-top:25px;
margin-bottom:20px;
        @media (max-width: 768px) {
font-size:12px;
margin-left:25px;
}
  @media (max-width: 425px) {
font-size:10px;
  }
`
const Eigh = styled.div`
border-radius: 20px;
width: 1140px;
height: 554px;
background: #e8e8e8;
        @media (max-width: 768px) {
border-radius: 15px;
width: 634px;
height: 526px;
}
  @media (max-width: 425px) {
border-radius: 15px;
width: 293px;
height: 755px;
text-align:center;
  }
`
const Data = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
color: #000;
width: 100px;
margin-right: 290px;
        @media (max-width: 768px) {
margin-right: 130px;
}
  @media (max-width: 425px) {
margin-right: 0px;
  }
  @media (max-width: 425px) {
font-size:10px;
  }
`


function Eight() {
  return (
    <div className="container">
    <Container>
        <Eigh>
 <Title>8-day forecast</Title>
        <Ul> 

            <Li>
                <Data>Fri, Oct 13</Data>
                <Box>
                    <Img src={rain} alt="" />
                    <Text>23/14℃</Text>
                </Box>
                <Text>light rain</Text>
            </Li>
            <Li>
                <Data>Sat, Oct 14</Data>
                <Box>
                    <Img src={rain} alt="" />
                    <Text>22/10℃</Text>
                </Box>
                <Text>light rain</Text>
            </Li>
            <Li>
                <Data>Sun, Oct 15</Data>
                <Box>
                    <Img src={rain} alt="" />
                    <Text>13/6℃</Text>
                </Box>
                <Text>light rain</Text>
            </Li>
            <Li>
                <Data>Mon, Oct 16</Data>
                <Box>
                    <Img src={clouds} alt="" />
                    <Text>12/4℃</Text>
                </Box>
                <Text>few clouds</Text>
            </Li>
            <Li>
                <Data>Tue, Oct 17</Data>
                <Box>
                    <Img src={overcast} alt="" />
                    <Text>12/4℃</Text>
                </Box>
                <Text>overcast clouds</Text>
            </Li>
            <Li>
                <Data>Wed, Oct 18</Data>
                <Box>
                    <Img src={clear} alt="" />
                    <Text>13/3℃</Text>
                </Box>
                <Text>clear sky</Text>
            </Li>
            <Li>
                <Data>Thu, Oct 19</Data>
                <Box>
                    <Img src={overcast} alt="" />
                    <Text>12/5℃</Text>
                </Box>
                <Text>overcast clouds</Text>
            </Li>
            <Li>
                <Data>Fri, Oct 20</Data>
                <Box>
                    <Img src={scattered} alt="" />
                    <Text>9/3℃</Text>
                </Box>
                <Text>scattered clouds</Text>
            </Li>
        </Ul>
        </Eigh>
    </Container>
    </div>
  );
}

export default Eight;