import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from '../../dist/style.css';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class ImageCarousel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    console.log(this.props.images)
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {/* {this.props.images.image.map(pic => (
          <Carousel.Item
            key={getRandomInclusive(6001, 10000)}
            className={styles.carousel}>
            {<img
              className={`${styles.img} ${styles['d-block']} ${styles['w-100']}`}
              src={pic}
              alt="First slide"
            />}
          </Carousel.Item>
        ))} */}
        <Carousel.Item>
          <img
            className='d-block w-100'
            src="https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-70497.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-70497.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<ImageCarousel />);

export default ImageCarousel;