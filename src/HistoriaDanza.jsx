import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container } from 'reactstrap';

const items = [
  {
    src: '/caporales.jpeg',
    altText: 'Caporales',
    caption: 'Caporales - Inspirado en los uniformes de los capataces coloniales.'
  },
  {
    src: '/tinkus.jpg',
    altText: 'Tinku',
    caption: 'Tinku - Danza guerrera andina con movimientos de combate.'
  },
  {
    src: '/images.jpeg',
    altText: 'Morenada',
    caption: 'Morenada - Representa a los esclavos africanos con pasos pesados.'
  }
];

function HistoriaDanza() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="d-block w-100" />
      <CarouselCaption captionText="" captionHeader={item.caption} />
    </CarouselItem>
  ));

  return (
    <Container>
      <h2>Historia de las Danzas</h2>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
      </Carousel>

      <div className="mt-4">
        <h4>Conclusión</h4>
        <p>
          Las danzas bolivianas son una expresión viva de la historia y diversidad cultural del país. 
          A través del baile, generaciones transmiten identidad, resistencia y tradición.
        </p>
      </div>
    </Container>
  );
}

export default HistoriaDanza;
