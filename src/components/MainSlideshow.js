import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { LinkButton } from 'src/components/common/Button'
import Arrow from 'src/components/common/Arrow'

import 'slick-carousel/slick/slick.css'

const SlideshowWrapper = styled.section`
  ${tw`m-0 p-0 lg:h-full`};
`
const SliderStyled = styled(Slider)`
  ${tw`lg:h-full`};
  ${media.lg`
    .slick-slide > div, .slick-list,.slick-track {
      height:100%!important;
    } 
  `};
`

const Slide = styled.div`
  ${tw`relative lg:h-full`};
`
const SlideImage = styled(Img)`
  ${tw`lg:h-full`};
  min-height: 400px;
  background-color: ${props => props.theme.primaryColor};
  img {
    ${tw`w-full mb-0 lg:h-full`};
  }
`
const SlideContent = styled.div`
  ${tw`absolute pin-x pin-y px-4 flex justify-center items-center text-center`};
  ${tw`md:px-16 lg:h-full`};
  background-color: rgba(50, 50, 0, 0.3);

  p {
    ${tw`text-2xl text-white font-primary`};
    ${tw`md:text-3xl xl:text-4xl font-bold`};
    text-shadow: 3px 3px 20px black;
  }
`

const CTAButton = styled(LinkButton)`
  ${tw`shadow-lg mt-8`};
`

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Arrow dir="right" onClick={onClick}>
      <FaChevronRight />
    </Arrow>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <Arrow dir="left" onClick={onClick}>
      <FaChevronLeft />
    </Arrow>
  )
}

const MainSlideshow = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <SlideshowWrapper>
      <SliderStyled {...settings}>
        {slides.map((slide, index) => (
          <Slide key={slide.image.url}>
            <SlideImage fluid={slide.image.fluid} />
            <SlideContent>
              <div>
                <p>{slide.slideTitle}</p>
                <CTAButton primary="true" to={slide.buttonLinkUrl}>
                  {slide.buttonText}
                </CTAButton>
              </div>
            </SlideContent>
          </Slide>
        ))}
      </SliderStyled>
    </SlideshowWrapper>
  )
}

export default MainSlideshow
