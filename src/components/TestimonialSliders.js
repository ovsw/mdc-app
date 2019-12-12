import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Arrow from 'src/components/common/Arrow'

const SlidersWrapper = styled.div`
  ${tw`mt-6 md:mt-10`};
  margin-bottom: 4rem !important;
  ${media.md`margin-bottom: 2rem!important;`};
`
const ImageSlider = styled(Slider)`
  display: none !important;
  ${media.md`display:block!important`};
`
const ImageSlide = styled.div`
  ${tw`w-full`};
  border-top: 5px solid ${props => props.theme.primaryColor};
  border-bottom: 5px solid ${props => props.theme.primaryColor};
`
const SlideImage = styled(Img)`
  min-height: 500px;
  img {
    ${tw`w-full mb-0`};
    border-bottom: 1px solid white;
    border-top: 1px solid white;
  }
`
const TextSlider = styled(Slider)`
  ${tw`relative`};
  ${media.md`top: -3rem;`};
  z-index: 1;

  .slick-list {
    box-sizing: initial;
    ${tw`py-2`};
  }

  .slick-track {
    display: flex !important;
    align-items: stretch !important;

    .slick-slide {
      ${tw`relative mx-4 md:mx-16 rounded-lg text-sm pl-6 pr-10 py-8 shadow-md`};
      display: flex !important;
      height: auto !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: white;

      &:before {
        content: '';
        ${tw`absolute`};
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        border: 1px solid ${props => props.theme.primaryColor};
      }
    }
  }
  .slick-dots {
    ${tw`list-reset text-center`};

    li {
      ${tw`relative inline-block  m-1 rounded-full leading-none`};
      top: 0.5rem;
      ${media.md`top: 1rem;`};
      font-size: 1px;
      background-color: white;
      border: 1px solid ${props => props.theme.primaryColor};
      transition: background-color 0.5s ease;

      &:hover {
        background-color: ${props => props.theme.primaryColorLight};
      }

      &.slick-active {
        background-color: ${props => props.theme.primaryColor};
      }

      button {
        ${tw`p-2 focus:outline-none`};
      }
    }
  }
`
const TextSlide = styled.div`
  ${tw`px-2 pt-2 pb-0`};
  text-indent: 2.5rem;
  & > div {
    ${tw`italic`};
  }
  & > p {
    text-indent: 1rem;
  }
  .quoteMark {
    ${tw`apply roman text-green-brand-light`};
    float: left;
    height: 45px;
    margin-top: -3rem;
    padding-top: 0.5rem;
    margin-bottom: -50px;
    font-size: 700%;

    margin-left: -2.5rem;
  }
`

const Signature = styled.div`
  ${tw`  text-sm float-right mt-4`};
  color: ${props => props.theme.primaryColor};
  text-indent: 0;
`

function NextArrow(props) {
  const { onClick, dark } = props
  return (
    <Arrow dir="right" onClick={onClick} dark={dark}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Arrow>
  )
}

function PrevArrow(props) {
  const { onClick, dark } = props
  return (
    <Arrow dir="left" onClick={onClick} dark={dark}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Arrow>
  )
}

class TestimonialSliders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    const {
      props: { testimonials },
      state: { nav1, nav2 },
    } = this

    const imageSliderSettings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 5500,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }

    const textSliderSettings = {
      dots: true,
      infinite: true,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 7500,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      nextArrow: <NextArrow dark />,
      prevArrow: <PrevArrow dark />,
      adaptiveHeight: true,
    }

    return (
      <SlidersWrapper>
        <ImageSlider {...imageSliderSettings} ref={slider => (this.slider1 = slider)} asNavFor={nav2}>
          {testimonials.map((slide, index) => (
            <ImageSlide key={slide.image.url}>
              <SlideImage fixed={slide.image.fixed} />
            </ImageSlide>
          ))}
        </ImageSlider>
        <TextSlider {...textSliderSettings} ref={slider => (this.slider2 = slider)} asNavFor={nav1}>
          {testimonials.map((slide, index) => (
            <TextSlide key={slide.image.url}>
              <span className="quoteMark">“</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: slide.body,
                }}
              />

              <Signature>-{slide.author}</Signature>
            </TextSlide>
          ))}
        </TextSlider>
      </SlidersWrapper>
    )
  }
}

export default TestimonialSliders
