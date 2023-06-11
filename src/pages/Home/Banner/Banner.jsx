import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../assets/different-learning-objects-peach-background.jpg'
import img2 from '../../../assets/english-books-assortment-still-life.jpg'
import img3 from '../../../assets/young-english-teacher-doing-her-lessons-online.jpg'

const Banner = () => {
    return (
        <AwesomeSlider>
        <div><img src={img1} alt="" /></div>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
      </AwesomeSlider>
    );
};

export default Banner;