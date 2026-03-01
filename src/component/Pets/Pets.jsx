import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 60px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Title = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Ul = styled.ul`
  display: grid;
  gap: 20px;
  padding: 0;
  list-style: none;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    p {
      max-height: 500px;
      overflow: visible;
    }
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const Text = styled.p`
  margin-top: 10px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: #333;
  text-align: center;

  max-height: 40px;
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 8px 18px;
  background: #ffb36c;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: #000;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

function Pets() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const currentPage = page;

      const imageRes = await fetch(
        `https://pixabay.com/api/?q=dogs&page=${currentPage}&key=50978158-2e1c075068d4fb19bda657fd9&image_type=photo&orientation=horizontal&per_page=4`
      );
      const imageData = await imageRes.json();

      const newsRes = await fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_3d09a4bc70224a32a63ce5add933b286&q=pets`
      );
      const newsData = await newsRes.json();

      const newItems = imageData.hits.map((img, index) => ({
        id: `${img.id}-${currentPage}-${index}`,
        image: img.webformatURL,
        text:
          newsData.results?.[index]?.description ||
          "No description available"
      }));

      setItems(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
      console.log(items)
    } catch (error) {
      console.error(error);
    }
  };
  console.log(items)
  return (
    <Container>
      <Title>Interacting with our pets</Title>
      <Ul>
        {items.map((item) => (
          <Li key={item.id}>
            <img src={item.image} alt="" />
            <Text>{item.text || "No description available"}</Text>
          </Li>
        ))}
      </Ul>
      <Button onClick={loadData}>See more</Button>
    </Container>
  );
}

export default Pets;