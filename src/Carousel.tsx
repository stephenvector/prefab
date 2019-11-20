import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@stephenvector/picto";
import styled from "./styled";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const Slides = styled.div`
  overflow: hidden;
`;

const Slide = styled.div<{ isActive: boolean }>`
  visibility: ${p => (p.isActive ? "visible" : "hidden")};
  display: ${p => (p.isActive ? "block" : "none")};
`;

const NavButtonBase = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  cursor: pointer;
  svg {
    width: 3rem;
    height: 3rem;
    :hover polyline {
      stroke: blue;
    }
  }
`;

const PreviousSlide = styled(NavButtonBase)`
  left: 0;
  z-index: 1000;
`;
const NextSlide = styled(NavButtonBase)`
  right: 0;
  z-index: 1000;
`;

type CarouselProps = {
  children: React.ReactNodeArray;
};

function Carousel({ children }: CarouselProps, ref: React.Ref<HTMLDivElement>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numSlides, setNumSlides] = useState(React.Children.count(children));

  useEffect(() => {
    setNumSlides(React.Children.count(children));
  }, [children, setNumSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(numSlides - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide, setCurrentSlide, numSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % numSlides);
  }, [currentSlide, setCurrentSlide, numSlides]);

  return (
    <Wrapper ref={ref}>
      <PreviousSlide type="button" onClick={previousSlide}>
        <ArrowLeft />
      </PreviousSlide>

      <NextSlide type="button" onClick={nextSlide}>
        <ArrowRight />
      </NextSlide>

      <Slides>
        {React.Children.map(children, (child, index) => {
          return (
            <Slide
              key={index}
              isActive={index === currentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${children.length}`}
            >
              {child}
            </Slide>
          );
        })}
      </Slides>
    </Wrapper>
  );
}

export default React.forwardRef(Carousel);
