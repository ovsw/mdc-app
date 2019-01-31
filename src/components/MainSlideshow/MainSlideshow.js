import React from 'react'
import { link, query } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import styles from './MainSlideshow.module.css'

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={styles.nextArrow} style={{ ...style, display: 'block' }} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={styles.prevArrow} style={{ ...style, display: 'block' }} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
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
    <section className="m-0 p-0">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.image.url} className="relative">
            <Img className={styles.slideImage} style={{ minHeight: '300px' }} fluid={slide.image.fluid} />
            <div className={styles.slideContent}>
              <div className="text-center">
                <p className={styles.slideTitle}>{slide.slideTitle}</p>
                <a className="btn btn-green-border lg:mt-8" href={slide.buttonLinkUrl}>
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default MainSlideshow
