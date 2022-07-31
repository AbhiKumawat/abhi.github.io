import './App.css';
// import wave1 from './assets/Wave.svg';
// import wave2 from './assets/Wave2.svg';
// import wave3 from './assets/Wave3.svg';
// import wave4 from './assets/Wave4.svg';
// import ppf from './assets/PPF.svg'
// import escobarLine1 from './assets/escobar_lines1.svg';
// import instagram from './assets/socials/instagram.svg';
// import twitter from './assets/socials/twitter.svg';
// import linkedin from './assets/socials/linkedin.svg';
// import spotify from './assets/socials/spotify.svg';

// import Button from './components/button/button'; 
/* State mangement
  RxJS
  Redux
*/
function App() {
  return (
    <div>
      {/* <img className="background-props pos-abs" src={wave1} alt=""></img>
      <img className="background-props pos-abs" src={wave2} alt=""></img>
       <img className="background-props pos-abs" src={wave3} alt=""></img>
      <img className="background-props pos-abs" src={wave4} alt=""></img> */}


      <div class="wave-container">
        <svg class="wave-prop" viewBox="0 0 1440 77" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 77L1380 66.9049C1320 57.0077 1200 37.0154 1080 29.8895C960 22.7635 840 28.5039 720 28.5039C600 28.5039 480 22.7635 360 21.3779C240 19.9923 120 22.7635 60 24.1491L0 25.7326V0H60C120 0 240 0 360 0C480 0 600 0 720 0C840 0 960 0 1080 0C1200 0 1320 0 1380 0H1440V77Z" fill="url(#paint0_linear_37_24)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_37_24" x1="1440" y1="1.05273" x2="1415.29" y2="231.958" gradientUnits="userSpaceOnUse">
          <stop offset="0.0907969" stop-color="#1322A5"/>
          <stop offset="1" stop-color="#3D34A2" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>

        <svg class="wave-prop" viewBox="0 0 1440 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-250 0L-179.583 67.126C-109.167 132.936 31.6667 265.871 172.5 313.255C313.333 360.638 454.167 322.468 595 322.468C735.833 322.468 876.667 360.638 1017.5 369.851C1158.33 379.064 1299.17 360.638 1369.58 351.424L1440 340.895V512H1369.58C1299.17 512 1158.33 512 1017.5 512C876.667 512 735.833 512 595 512C454.167 512 313.333 512 172.5 512C31.6667 512 -109.167 512 -179.583 512H-250V0Z" fill="url(#paint0_linear_33_100)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_33_100" x1="-250" y1="505" x2="438.512" y2="-630.466" gradientUnits="userSpaceOnUse">
            <stop offset="0.0907969" stop-color="#8589AE"/>
            <stop offset="1" stop-color="#3D34A2" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>

        <svg id="WaveBottomBig" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1582 -8L1478 302.609C1396.08 448.239 1254.33 580.344 1090.5 685.198C926.667 790.051 762.833 705.586 599 705.586C435.167 705.586 257.333 765.436 93.5 785.824C-70.3334 806.212 -220.167 790.051 -302.083 769.663L-384 746.362V1125H-302.083C-220.167 1125 -56.3334 1125 107.5 1125C271.333 1125 435.167 1125 599 1125C762.833 1125 926.667 1125 1090.5 1125C1254.33 1125 1418.17 1125 1500.08 1125H1582V-8Z" fill="url(#paint0_linear_33_99)"/>
          <defs>
            <linearGradient id="paint0_linear_33_99" x1="1716.5" y1="1027.83" x2="15.5991" y2="-446.782" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3223DC"/>
              <stop offset="1" stop-color="#3D34A2" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="wave-prop-bottom"  fill-rule="evenodd" clip-rule="evenodd" d="M-369 -282L-285.708 -110.776C-202.417 57.09 -35.8333 396.18 130.75 517.044C297.333 637.907 463.917 540.545 630.5 540.545C797.083 540.545 963.667 637.907 1130.25 661.409C1296.83 684.91 1463.42 637.907 1546.71 614.406L1630 587.548V1024H1546.71C1463.42 1024 1296.83 1024 1130.25 1024C963.667 1024 797.083 1024 630.5 1024C463.917 1024 297.333 1024 130.75 1024C-35.8333 1024 -202.417 1024 -285.708 1024H-369V-282Z" fill="url(#paint0_linear_33_98)"/>
        <defs>
          <linearGradient id="paint0_linear_33_98" x1="-369" y1="1006.14" x2="1542.46" y2="-455.633" gradientUnits="userSpaceOnUse">
            <stop stop-color="#24008C"/>
            <stop offset="1" stop-color="#3D34A2" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      </div> 

    


      {/* <img className='background-props pos-abs z-ind-1' src={escobarLine1} alt=""></img> */}
      {/* <img className='background-props pos-abs' src={ppf} alt=""></img> */}
     
    </div> 
  );
}

export default App;
