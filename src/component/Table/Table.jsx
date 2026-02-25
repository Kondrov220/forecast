import styled from "styled-components";

import feels from '../../img/feels.png'
import humidity from '../../img/humidity.png'
import pressure from '../../img/pressure.png'
import visibility from '../../img/visibility.png'
import wind from '../../img/wind.png'


const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
   display: ${props => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
        @media (max-width: 768px) {
  padding-left: 0px;
  padding-right: 0px;
}
`;


const Ul = styled.ul`
border-radius: 20px;
max-width: 1140px;
background: #e8e8e8;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:60px;
row-gap:40px;
padding-top: 40px;
padding-bottom: 40px;
      @media (max-width: 768px) {
border-radius: 15px;
max-width: 634px;
gap:20px;
row-gap:20px;
padding-top: 30px;
padding-bottom: 30px;
}
  @media (max-width: 425px) {
border-radius: 15px;
max-width: 293px;
  }
`

const Li = styled.li`
border-radius: 10px;
width: 290px;
height: 217px;
background: #d9d9d9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
      @media (max-width: 768px) {
border-radius: 10px;
width: 177px;
height: 200px;
}
  @media (max-width: 425px) {
border-radius: 10px;
width: 207px;
height: 160px;
  }
`

const Text = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
text-align: center;
color: #000;
      @media (max-width: 768px) {
font-size: 12px;
}
`

const Title = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 32px;
text-align: center;
color: #000;
margin-top: 5px;
margin-bottom: 20px;
      @media (max-width: 768px) {
font-size: 16px;
}
`

const Img = styled.img`
max-width: 85px;
height: 85px;
      @media (max-width: 768px) {
max-width:60px;
height:60px;
}
`


function Table({open, isOpen, data}) {
     if (!data) return null;
  return (
     <div className="container">
    <Container open={open}>
        <Ul>
            <Li>
                <Text>Feels like</Text>
                <Title>{Math.round(data.temp)}</Title>
                <Img src={feels} alt="" />
            </Li>
            <Li>
                <Text>Min ℃</Text>
                <Title>{data.min}℃</Title>
                <Text>Max ℃</Text>
                <Title>{data.max}℃</Title>
            </Li>
            <Li>
                <Text>Humidity</Text>
                <Title>{data.humidity}</Title>
                <Img src={humidity} alt="" />
            </Li>
            <Li>
                <Text>Pressure</Text>
                <Title>{data.pressure}</Title>
                <Img src={pressure} alt="" />
            </Li>
            <Li>
                <Text>Wind speed</Text>
                <Title>{data.wind} m/s</Title>
                <Img src={wind} alt="" />
            </Li>
            <Li>
                <Text>Visibility</Text>
                <Title>{data.visibility}</Title>
                <Img src={visibility} alt="" />
            </Li>
        </Ul>
    </Container></div>
  );
}

export default Table;