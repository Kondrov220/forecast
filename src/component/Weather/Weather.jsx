import styled from "styled-components";
import Table from "../Table/Table";
import Graph from "../Graph/Graph";
import Eight from "../Eight/Eight"
import sun from '../../img/sun.png'
import reset from '../../img/reset.png'
import heart from '../../img/heart.png'
import delet from '../../img/delete.png'
import { useState } from "react";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
      justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 80px;
            @media (max-width: 768px) {
  padding-left: 0px;
  padding-right: 0px;
}
`

const List = styled.ul`
display: flex;
gap:90px;
flex-wrap:wrap;
      justify-content: center;
    align-items: center;
`

const Li = styled.li`

border-radius: 20px;
width: 320px;
height: 430px;
background: #e8e8e8;
display: flex;
flex-direction: column;
    align-items: center;

          @media (max-width: 768px) {
width: 262px;
height: 352px;
}
  @media (max-width: 425px) { 
     justify-content: space-between;
  padding:10px;
width: 293px;
height: 392px;
  }
`

const MiniText = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
color: #000;
      @media (max-width: 768px) {
font-size: 12px;
}
`

const Time = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 24px;
color: #000;
margin-bottom: 10px;
      @media (max-width: 768px) {
font-size: 20px;
}
  @media (max-width: 425px) {
margin-bottom: 15px;
  }
`

const Temperature = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 32px;
color: #000;
margin-top: 15px;
margin-bottom: 38px;
      @media (max-width: 768px) {
font-size: 20px;
}
`

const Button = styled.button`
border-radius: 10px;
padding: 8px 18px;
background: #ffb36c;
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
text-align: right;
color: #000;
  &:hover {
       transform: scale(110%);
  }
`

const Box = styled.div`
max-width: 260px;
width:100%;
display: flex;
justify-content: space-between;
margin-top: 10px;
margin-bottom: 15px;
      @media (max-width: 768px) {
max-width: 212px;
}
`

const Sun = styled.img`
max-width: 120px;
height: 120px;
      @media (max-width: 768px) {
max-width: 76px;
height: 76px;
}
`

const Img = styled.img`
max-width: 30px;
height: 30px;
      @media (max-width: 768px) {
max-width: 24px;
height: 24px;
}
`

const Div = styled.div`

max-width: 280px;
width:100%;
display: flex;
justify-content: space-between;
      @media (max-width: 768px) {
max-width: 230px;
width:100%;
}
`

const Line = styled.div`
  width: 1px;
  height: 17px;
  background: #000000;

`

const Boxe = styled.div`
display: flex;
gap: 13px;
margin-top: 15px;
margin-bottom: 20px;
`

const IconButton = styled.button`
  &:hover {
  img{
       transform: scale(110%);
       }
  }
`


function Weather({ data, setData ,lat, lon }) {
   const [isOpen, setIsOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  const savedUser = JSON.parse(localStorage.getItem("user")) || { city: [] };

  const postCity = (city) => {
    if (!city) return;

  
    const exists = data.find(item => item.name === city.name);
    if (!exists) {
      setData(prev => [...prev, city]);
    }


    if (!savedUser.city.includes(city.name)) {
      const updatedUser = { ...savedUser, city: [...savedUser.city, city.name] };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  const deleteCity = (name) => {
    setData(prev => prev.filter(item => item.name !== name));
  };

    return (
        <>
         <div className="container">
            <Container >
                <List>
                    {data.map((item, index) => (
                        <Li key={index}>
                            <Box>
                                <MiniText>{item.name}</MiniText>
                                <MiniText>{item.country}</MiniText>
                            </Box>

                            <Time>{new Date().toLocaleTimeString()}</Time>

                            <Button>Hourly forecast</Button>

                            <Boxe>
                                <MiniText>{new Date().toLocaleDateString()}</MiniText>
                                <Line></Line>
                                <MiniText>
                                    {new Date().toLocaleDateString("uk-UA", { weekday: "long" })}
                                </MiniText>
                            </Boxe>

                            <Sun src={sun} alt="" />

                            <Temperature>
                                {Math.round(item.temp)}℃
                            </Temperature>

                            <Div>
                                <IconButton>
                                    <Img src={reset} alt="" />
                                </IconButton>

                                <IconButton onClick={() => postCity(item, index)}>
                                    <Img src={heart} alt="" />
                                </IconButton>

                                <Button onClick={() => {
                                    setCurrentCity(item);
                                    setIsOpen(true);
                                }}>See more</Button>

                                <IconButton>
                                    <Img src={delet} alt="" onClick={deleteCity}/>
                                </IconButton>
                            </Div>
                        </Li>
                    ))}
                </List>
            </Container>
</div>
          <Table open={isOpen} setOpen={setIsOpen} data={currentCity}></Table>
          <Graph open={isOpen} setOpen={setIsOpen} lat={lat} lon={lon}></Graph>
          <Eight open={isOpen} setOpen={setIsOpen} lat={lat} lon={lon}></Eight>
        </>
    );
}

export default Weather;
