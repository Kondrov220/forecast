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
  const [images, setImages] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=dog&apiKey=ef3e8b523a8342f999fac3a0887c1d2f`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      })
      .catch(err => console.log(err));

    getImages();
  }, []);

  const getImages = async () => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=dogs&page=${page}&key=50978158-2e1c075068d4fb19bda657fd9&image_type=photo&orientation=horizontal&per_page=4`
      );
      const data = await res.json();
      setImages(prev => [...prev, ...data.hits]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Interacting with our pets</Title>
      <Ul>
        {images.map((img, index) => (
          <Li key={img.id}>
            <img src={img.webformatURL} alt={img.tags} />
            <Text>{articles[index]?.description || "No description available"}</Text>
          </Li>
        ))}
      </Ul>
      <Button onClick={getImages}>See more</Button>
    </Container>
  );
}

export default Pets;