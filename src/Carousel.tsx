import React, { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "@stephenvector/picto";

import styled from "styled-components";

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

export default function Carousel({ children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(React.Children.count(children) - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);
  const nextSlide = useCallback(() => {
    if (currentSlide === React.Children.count(children) - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  return (
    <Wrapper>
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
              aria-label={`${index} of ${children.length}`}
            >
              {child}
            </Slide>
          );
        })}
      </Slides>
    </Wrapper>
  );
}
