import styled from "styled-components";
import { useState , useEffect , useRef } from "react";
import Chart from "chart.js/auto";

const Container = styled.div`
   display: ${props => (props.open ? "flex" : "none")};
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const Box = styled.div`
  border-radius: 20px;
  max-width: 1040px;
  width:100%;
  background: #e8e8e8;
  padding: 20px;
`;

function Graph({open, isOpen, lat, lon}) {
  const chartRef = useRef(null);
  const [weather, setWeather] = useState([]);
  let array;
  useEffect(() => {
    if (!lat || !lon) return;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=22e30256a6bc217554b8155e50f42d6c`)
      .then(res => res.json())
      .then(data => {
        if(data.list){
       setWeather(data.list.slice(0, 12)); }
      });
 }, [lat, lon]);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: weather.map(item =>
          item.dt_txt.split(" ")[1].slice(0, 5)),
        datasets: [
          {
            label: "Temperature",
            data: weather.map(item =>
          item.main.temp),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy(); // очищення при розмонтуванні
    };
  }, [weather]);
  return (
    <div className="container">
    <Container open={open}>
      <Box>
        <p>Hourly forecast</p>
        <div style={{ height: "400px" }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </Box>
    </Container></div>
  );
}

export default Graph;