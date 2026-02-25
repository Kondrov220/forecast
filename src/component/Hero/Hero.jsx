import styled from "styled-components";
import { useState } from "react";
import hero from '../../img/hero.jpg'
import search from '../../img/search.png'
import Weather from "../Weather/Weather";

const Backgraund = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${hero});
  height: 395px;
  background-size: cover;
  background-position: center 70%;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 20px;


  @media (max-width: 768px) {
  width: 738px;
    height: auto;
    padding: 60px 15px;
  }
  @media (max-width: 425px) {
     max-width: 375px;
    height: auto;
    padding: 30px 0px;
  }

`
const Line = styled.div`
  width: 2px;
  height: 144px;
  background: #fff;
    @media (max-width: 768px) {
height: 110px;
}
  @media (max-width: 425px) {
  height: 80px;
  position: absolute;
  left: 0px;
  top: 0px;
  }

`

const Title = styled.h1`
margin-bottom: 90px;
font-family: Montserrat;
font-weight: 600;
font-size: 40px;
color: #fff;
@media (max-width: 768px) {
font-size: 20px;
}
  @media (max-width: 425px) {
  font-size: 14px;
  }
`

const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  color: #fff;
  width: 164px;
  @media (max-width: 768px) {
font-size: 14px;
}
  @media (max-width: 425px) {
  width:69px;
  font-size: 10px;
  }
`;

const Right = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  text-align: right;
  color: #fff;
  width: 345px;
  @media (max-width: 768px) {
font-size: 14px;
width: 172px;
}
  @media (max-width: 425px) {
  font-size: 10px;
  width: 136px;
  text-align: left;
  }
`;

const Box = styled.div`
  position: relative;
  max-width:613px;
  display: flex;
  justify-content: start;
  gap:52px;
  margin-right: 180px;
      @media (max-width: 768px) {
    margin-right: 0px;
  justify-content: center;
}
    @media (max-width: 425px) {
    position: relative;
  flex-direction:column;
  justify-content: center;
  align-items: start;
    gap:20px;
    padding-left:20px;
  }
`

const Input = styled.input`
border-radius: 10px;
width: 599px;
height: 42px;
background: #d9d9d9;
  border: none;
  outline: none;
  padding: 0 0 0 15px;
        @media (max-width: 768px) {
width: 374px;
height: 33px;
}
  @media (max-width: 425px) {
width: 157px;
height: 20px;
border-radius: 5px;
  }
`

const Button = styled.button`
border-left: 2px solid #000;
border-radius: 0 10px 10px 0;
width: 45px;
height: 100%;
background: #ffb36c;
  position: absolute;
  right: 0px;
  top: 0px;
        @media (max-width: 768px) {
width: 28px;
}
  @media (max-width: 425px) {
width: 16px;
border-radius: 0 5px 5px 0;
top: 4px;
  }
`
const Search = styled.div`
margin-top: 80px;
  position: relative;
  width: 625px;
      @media (max-width: 768px) {
width: 402px;
height: 33px;
}
  @media (max-width: 425px) {
width: 173px;
height: 20px;
  }
`;

const Img = styled.img`
      @media (max-width: 768px) {
height: 16px;
}
  @media (max-width: 425px) {
height: 9px;
  }
`

function App() {
 const [value, setValue] = useState();
 const [data, setData] = useState([]);
  const API_KEY = "22e30256a6bc217554b8155e50f42d6c";
const getCoordinates = async () => {
  if (!value) return;

  try {
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${API_KEY}`
    );

    const geoData = await geoRes.json();

    if (!geoData.length) {
      alert("Місто не знайдено");
      return;
    }

    const { lat, lon, name: cityName, country } = geoData[0];


    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    const weatherData = await weatherRes.json();
    setData(prev => [
      ...prev,
      {
        name: cityName,
        country,
        temp: weatherData.main.temp,
        min: weatherData.main.temp_min,
        max: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        wind: weatherData.wind.speed,
        visibility: weatherData.visibility
      }
    ]);

  const savedUser = JSON.parse(localStorage.getItem("user"));

if (savedUser) {
  const updatedUser = {
    ...savedUser,
    city: [...(savedUser.city || []), cityName]
  };

  await fetch(
    `https://699dc3e283e60a406a475fc5.mockapi.io/sing/sing/${savedUser.id}`,
    {
      method: "PUT",  
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser)
    }
  );

  localStorage.setItem("user", JSON.stringify(updatedUser));
}

  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
    <Backgraund>
      <Title>Weather dashboard</Title>
      <Box>
        <Right>Create your personal list of favorite cities and always be aware of the weather.</Right>
        <Line></Line>
        <Text>October 2023 Friday, 13th</Text>
      </Box>
      <Search>
      <Input placeholder="Search location..." type="text"  onChange={(e) => setValue(e.target.value)} />
      <Button onClick={getCoordinates}>
        <Img src={search} alt="" />
      </Button>
      </Search>
      
    </Backgraund>
    <Weather data={data}></Weather>
</>
  );
}

export default App;
