import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Img = styled.img`
border-radius: 50px;
`

function Nature() {
   const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://pixabay.com/api/?q=nature&key=50978158-2e1c075068d4fb19bda657fd9&image_type=photo&orientation=horizontal`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
      })
  }, [images]);
        return (
          <div className="container">
            {images.length > 0 &&(
                          <Carousel showThumbs={false}>
              {images.slice(0,10).map(item => (
                <div>
                    <Img src={item.largeImageURL} />
                </div>
              ))}

            </Carousel>
            )}
</div>
        );
    }

export default Nature