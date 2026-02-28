import styled from "styled-components";
import "../../App.css";
import clouds from '../../img/clouds.png';
import overcast from '../../img/overcast.png';
import rain from '../../img/rain.png';
import scattered from '../../img/scattered.png';
import clear from '../../img/clear.png';
import { useState, useEffect, useRef } from "react";

const Container = styled.div`
display: ${props => (props.open ? "flex" : "none")};
max-width: 1140px;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px;
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
`;

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
`;

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
`;

const Img = styled.img`
width: 45px;
height: 45px;
@media (max-width: 425px) {
  width: 30px;
  height: 30px;
}
`;

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
`;

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
`;

const Eigh = styled.div`
border-radius: 20px;
width: 1140px;
padding-bottom: 35px;
background: #e8e8e8;
@media (max-width: 768px) {
  border-radius: 15px;
  width: 634px;
}
@media (max-width: 425px) {
  border-radius: 15px;
  width: 293px;
  text-align:center;
}
`;

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
  font-size:10px;
}
`;

function Eight({ open, lat, lon }) {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (!lat || !lon) return;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=22e30256a6bc217554b8155e50f42d6c`)
      .then(res => res.json())
      .then(data => {
        const grouped = {};

        data.list?.forEach(item => {
          const date = item.dt_txt.split(" ")[0]; 
          if (!grouped[date]) grouped[date] = [];
          grouped[date].push(item);
        });

        const daily = Object.values(grouped).map(dayItems => ({
          dt: dayItems[0].dt,
          main: {
            temp_max: Math.max(...dayItems.map(i => i.main.temp_max)),
            temp_min: Math.min(...dayItems.map(i => i.main.temp_min))
          },
          weather: [{ description: dayItems[0].weather[0].description }]
        }));

        setWeather(daily);
      });

  }, [lat, lon]);

  return (
    <Container open={open}>
      <Eigh>
        <Title>8-day forecast</Title>
        <Ul>
          {weather.map((i, index) => {
            const date = new Date(i.dt * 1000);
            const day = date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            });

            return (
              <Li key={index}>
                <Data>{day}</Data>

                <Box>
                  <Img src={rain} alt="" />
                  <Text>
                    {Math.round(i.main.temp_max)}/
                    {Math.round(i.main.temp_min)}℃ 
                  </Text>
                </Box>

                <Text>{i.weather[0].description}</Text>
              </Li>
            );
          })}
        </Ul>
      </Eigh>
    </Container>
  );
}

export default Eight;