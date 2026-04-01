import { Link } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";
import { dogs } from "../data/dogs";
import "../styles/DogCarousel.css";

export default function DogCarousel() {
  const wrapperRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  const infiniteDogs = [...dogs, ...dogs, ...dogs];
  const cardWidth = 270;
  const originalStartIndex = dogs.length;
  const totalDogsCount = dogs.length;

  const scrollToIndex = useCallback((index, behavior = 'smooth') => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: index * cardWidth,
        behavior: behavior
      });
    }
  }, [cardWidth]);

  const nextSlide = useCallback(() => {
    if (!wrapperRef.current) return;
    
    const currentScroll = wrapperRef.current.scrollLeft;
    const currentCardIndex = Math.round(currentScroll / cardWidth);
    const nextIndex = currentCardIndex + 1;
    
    scrollToIndex(nextIndex);
    
    if (nextIndex >= totalDogsCount * 2) {
      setTimeout(() => {
        scrollToIndex(originalStartIndex, 'auto');
      }, 500);
    }
  }, [scrollToIndex, cardWidth, originalStartIndex, totalDogsCount]);

  const prevSlide = useCallback(() => {
    if (!wrapperRef.current) return;
    
    const currentScroll = wrapperRef.current.scrollLeft;
    const currentCardIndex = Math.round(currentScroll / cardWidth);
    const prevIndex = currentCardIndex - 1;
    
    scrollToIndex(prevIndex);
    
    if (prevIndex < totalDogsCount) {
      setTimeout(() => {
        scrollToIndex(totalDogsCount * 2, 'auto');
      }, 500);
    }
  }, [scrollToIndex, cardWidth, totalDogsCount]);

  useEffect(() => {
    if (wrapperRef.current) {
      const startPosition = originalStartIndex * cardWidth;
      wrapperRef.current.scrollLeft = startPosition;
    }

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextSlide, originalStartIndex, cardWidth]);

  return (
    <section className="carousel" id="dogs">
      <h2>Наши собаки</h2>
      <div className="carousel-container-wrapper">
        <button className="carousel-button prev" onClick={prevSlide}>
          ❮
        </button>
        <div className="carousel-wrapper" ref={wrapperRef}>
          <div className="carousel-container">
            {infiniteDogs.map((dog, idx) => (
              <Link to={`/dog/${dog.id}`} key={`${dog.id}-${idx}`}>
                <div className="dog-card">
                  <img src={dog.image} alt={dog.name} />
                  <h3>{dog.name}</h3>
                  <p>{dog.breed}, {dog.age} {dog.age === 1 ? 'год' : (dog.age < 5 ? 'года' : 'лет')}</p>
                  <p>{dog.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}