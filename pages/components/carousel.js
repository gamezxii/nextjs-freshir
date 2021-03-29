import React from "react";
import "@google/model-viewer";

export default function Demo() {
  var slideIndex = 0;

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var indicators = document.querySelectorAll("li");
    var mySlides = document.querySelectorAll(".mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < mySlides.length; i++) {
      mySlides[i].className = mySlides[i].className.replace(" active", "");
    }

    for (i = 0; i < indicators.length; i++) {
      indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
    mySlides[slideIndex - 1].className += " active";

    // setTimeout(showSlides, 4000);
  }

  React.useEffect(() => {
    showSlides();
    let id = setInterval(() => {
      showSlides();
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <div className="slideshow-container">
        <ol className="slideshow-indicators">
          <li onClick={() => currentSlide(1)}></li>
          <li onClick={() => currentSlide(1)}></li>
          <li onClick={() => currentSlide(1)}></li>
        </ol>

        <div className="slideshow-inner">
          <div className="mySlides  slideshow-item  ">
            <model-viewer
              ar-modes="scene-viewer quick-look"
              style={{ width: "100%", height: "480px" }}
              src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_01_android.glb"
              ios-src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_01_ios.usdz"
              min-camera-orbit="auto 50% auto"
              max-camera-orbit="auto 50% 100%"
              min-field-of-view="25deg"
              max-field-of-view="95deg"
              ar="true"
              exposure="1.2"
              shadow-intensity="0.25"
              camera-controls="true"
              auto-rotate="true"
              data-js-focus-visible=""
              ar-status="not-presenting"
            ></model-viewer>
            <div className="slideshow-caption">
              <h3 style={{ color: "rgba(0, 0, 0, 0.3)" }}>FAU</h3>
            </div>
          </div>

          <div className="mySlides slideshow-item  ">
            <model-viewer
              ar-modes="scene-viewer quick-look"
              style={{ width: "100%", height: "480px" }}
              src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_02_android.glb"
              ios-src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_02-ios.usdz"
              min-camera-orbit="auto 50% auto"
              max-camera-orbit="auto 50% 100%"
              min-field-of-view="25deg"
              max-field-of-view="95deg"
              ar="true"
              exposure="1.2"
              shadow-intensity="0.25"
              camera-controls="true"
              auto-rotate="true"
              data-js-focus-visible=""
              ar-status="not-presenting"
            ></model-viewer>
            <div className="slideshow-caption">
              <h3 style={{ color: " rgba(0, 0, 0, 0.3)" }}>HCU-Lite</h3>
            </div>
          </div>

          <div className="mySlides slideshow-item  ">
            <model-viewer
              ar-modes="scene-viewer quick-look"
              style={{ width: "100%", height: "480px" }}
              src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_02_android.glb"
              ios-src="https://cdn.glitch.com/21c34e33-9493-469f-b7b7-5849ebaadb61%2FAirCon_02-ios.usdz"
              min-camera-orbit="auto 50% auto"
              max-camera-orbit="auto 50% 100%"
              min-field-of-view="25deg"
              max-field-of-view="95deg"
              ar="true"
              exposure="1.2"
              shadow-intensity="0.25"
              camera-controls="true"
              auto-rotate="true"
              data-js-focus-visible=""
              ar-status="not-presenting"
            ></model-viewer>
            <div className="slideshow-caption">
              <h3 style={{ color: " rgba(0, 0, 0, 0.3)" }}>HCU-Lite</h3>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <br />

      <style jsx>{`
        .slideshow-container {
          position: relative;
          width: 100%;
          background: tranparent;
        }

        .slideshow-indicators {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 15;
          display: flex;
          justify-content: center;
          padding-left: 0;
          margin-right: 15%;
          margin-left: 15%;
          list-style: none;
        }

        .slideshow-indicators > li {
          height: 3px;
          width: 20px;
          margin: 0 2px;
        }

        .slideshow-indicators > li.active {
          background-color: #dfdfdf;
        }

        .slideshow-indicators > li:hover {
          cursor: pointer;
        }

        .slideshow-inner {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .slideshow-item {
          z-index: 1;
          position: relative;
          display: none;
          float: left;
          width: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: transform 0.6s ease-in-out;
          animation-name: tonext;
          animation-timing-function: ease;
          animation-duration: 4s;
        }

        .slideshow-item.active {
          display: block;
          transition: 0.6s ease;
        }

        .slideshow-caption {
          position: absolute;
          right: 15%;
          bottom: 20px;
          left: 15%;
          z-index: 10;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #fff;
          text-align: center;
        }

        .fade {
          animation-duration: 4s;
          animation-delay: 2s;
        }

        @-webkit-keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade {
          from {
            margin-right: -100%;
          }
          to {
            margin-right: 0;
          }
        }

        @keyframes tonext {
          0% {
            right: -100%;
          }
          50% {
            right: 0;
          }
          100% {
            right: 100%;
          }
        }
      `}</style>
    </div>
  );
}
