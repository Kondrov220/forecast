import styled from "styled-components";
import { useState , useEffect} from "react";
import cat from '../../img/cat.png'
import dog from '../../img/dog.png'
import ghosts from '../../img/ghosts.png'
import man from '../../img/man.png'

const Container = styled.div`
  max-width: 1140px;
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
max-width:207px;
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
max-width: 93px;
height: 38px;
margin-top:20px;
margin-left:20px;
}
`

const Ul = styled.ul`
display: flex;
flex-wrap:wrap;
gap: 20px;
      justify-content: center;
    align-items: start;
@media (max-width: 768px) {
flex-wrap:wrap;
      justify-content: center;
    align-items: start;
}
`

const Li = styled.li`
display: flex;
  flex-direction: column;
      justify-content: center;
    align-items: center;
`

function Pets() {
  const [images, setImages] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const PIXABAY_KEY = "50978158-2e1c075068d4fb19bda657fd9";
  const NEWS_KEY = "ef3e8b523a8342f999fac3a0887c1d2f";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=dog&apiKey=${NEWS_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
      })
      .catch(err => console.log(err));
  }, []);

  const getImages = async () => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=dogs&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=4`
      );

      const data = await res.json();

      setImages(prev => [...prev, ...data.hits]);
      setPage(prev => prev + 1);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
    <Container>
      <Title>Interacting with our pets</Title>

      <Ul>
        {images.map((img, index) => (
          <Li key={img.id}>
            <img src={img.webformatURL} alt={img.tags} width="250" />
            <Text>
              {articles[index]?.description || "No description available"}
            </Text>
          </Li>
        ))}
      </Ul>

      <Button onClick={getImages}>See more</Button>
    </Container></div>
  );
}

export default Pets;
