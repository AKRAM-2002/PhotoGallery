import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Img1 from './assets/img1.jpeg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';
import Img4 from './assets/img4.jpg';
import Img5 from './assets/img5.jpeg';
import Img6 from './assets/img6.jpeg';
import Img7 from './assets/img7.jpg';
import Img8 from './assets/img8.jpg';
import Img9 from './assets/img9.jpg';
import Img10 from './assets/img10.jpg';
import Img11 from './assets/img11.jpg';
import Img12 from './assets/img12.jpg';
import Img13 from './assets/img13.jpg';
import Img14 from './assets/img14.jpg';
import Img15 from './assets/img15.jpg';
import Img16 from './assets/img16.jpg';
import Img17 from './assets/img17.jpg';




const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
       
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
  return (
    <>
    <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick= {() => setModel(false)}/>

    </div>
    <div className='gallery'>
        {data.map((image,index) =>{
          return (
            <div className='pics' key={index} onClick={() => getImg(image.imgSrc)}> 

                <img src={image.imgSrc} style={{width : '90%'}} alt="" />
                
            </div>
        )
        })}

    </div>
    </>
  )
}

export default Gallery