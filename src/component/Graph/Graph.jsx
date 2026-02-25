import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
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

const Box = styled.div`
border-radius: 20px;
max-width: 1140px;
height: 554px;
background: #e8e8e8;
        @media (max-width: 768px) {
border-radius: 15px;
max-width: 634px;
height: 400px;
}
`

function Graph() {
  return (
     <div className="container">
    <Container>
      <Box>
        <p>Hourly forecast</p>
        </Box>
    </Container></div>
  );
}

export default Graph;