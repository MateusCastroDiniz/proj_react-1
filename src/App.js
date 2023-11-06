import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './App.css';
import './assets/mateusinho.jpeg';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { users } from './usersList.js';
import { publis } from './videosList.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center" id='App'>
      <div class="waves-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="Wave 1" class="wave wave1"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,277.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="Wave 2" class="wave wave2"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L26.7,48C53.3,64,107,96,160,101.3C213.3,107,267,85,320,101.3C373.3,117,427,171,480,170.7C533.3,171,587,117,640,90.7C693.3,64,747,64,800,74.7C853.3,85,907,107,960,144C1013.3,181,1067,235,1120,224C1173.3,213,1227,139,1280,101.3C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
          </div> 
      <Profiles />
      <Publis />
    </div>
  );
}

function MyButton() {
  return (
    <a class='btn btn-outline-light btn-md'>I'm a button</a>
  );
}

function Profiles() {
  return (
    <>
      <Carousel />
    </>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
  ],
};

const Carousel = () => {
  const listaUsu = users.map(user => 
    
    <li key={user.name} class='user-avatar d-flex flex-column align-items-center'>
      <a href="">
        <img
        class='avatar align-center'
        src={user.imgURL}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          heigth: user.imageSize
        }}
        />
      </a>
      <h1 class='user-name fs-4 mt-2'>{user.name}</h1>
    </li>
);


return (
<div id='nav-usu' class='container m-3 p-3 rounded align-items-center'>

<div class="row">
  <div class="col-12">
    <Slider {...settings}>
      {listaUsu}
    </Slider>
  </div>
</div>
</div>
);
};

function Publis() {  
  return (
    <div className="container position-relative my-4">
      <div class="row justify-content-center">
        <div class="col-6">
          <video
            id='video'
            class='rounded video'
            src={publis[1].videoURL}
            alt="..."
            style={{ width: '100%' }}
            controls
          />
        </div>
      </div>
    </div>

      // <div id='publi-carousel' className='container m-3 p-3 rounded align-items-center'>
      //   <div className="row">
      //     <div className="col-12 d-flex flex-column align-items-center">
      //       {publis.map(publi => (
      //         <div className="card position-relative" style={{ width: '35vw' }}>
      //           <div className="card-header text-start">
      //             <img
      //               className='avatar d-inline'
      //               src={publi.imgURL}
      //               alt={'Foto de ' + publi.Username}
      //               style={{
      //                 width: publi.imageSize,
      //                 height: publi.imageSize
      //               }}
      //             />
      //             <p className='d-inline mb-0 ms-3 fs-5 fw-bold'>{publi.Username}</p>
      //           </div>
      //           <div className="position-relative w-100">
      //             <video
      //               className='video'
      //               src={publi.videoURL}
      //               alt="..."
      //               style={{ width: '100%' }}
      //               controls
      //             />
      //             {/* <div className="controls position-absolute top-50 start-50 translate-middle">
      //               <button id='btn-play' onClick={() => togglePlay(publi)}>
      //                 <i
      //                   id='play'
      //                   className={`bi video-btn ${isPlaying(publi) ? 'bi-pause-fill' : 'bi-play-fill'} fs-1`}
      //                 ></i>
      //               </button>
      //             </div>
      //             <div className='timeline'>
      //               <div className='bar'>
      //                 <div className='bar-inner'></div>
      //               </div>
      //             </div> */}
      //           </div>
      //           <div className='card-body text-start'>
      //             <small>{publi.Username}</small>
      //             <p className='card-text'>{publi.publiText}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </div>
    ); 
  
  }

export default App;