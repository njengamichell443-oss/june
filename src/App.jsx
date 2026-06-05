import "./App.css";
import React, { useState } from "react";
function App(){

    <div>
      <h1>Happy 25th Birthday June🎂</h1>
    </div>
  
  const [wishMade, setWishMade] = useState(false);

  const photos = [
    "/pics/june1.jpg.jpeg",
    "/pics/june2.jpg.jpeg",
    "/pics/june3.jpg.jpeg",
    "/pics/june4.jpg.jpeg",
    "/pics/june5.jpg.jpeg"
  ];

  const makeWish = () => {
    setWishMade(true);
  };

  return (
    <div className="app">

      <h1 className="title">🎂 Happy 25h Birthday June 🎂</h1>

      {!wishMade && (
        <div className="cake-section">

          <div className="cake-container">

            <div className="candle">
              <div className="flame"></div>
            </div>

            <div className="cake-top"></div>
            <div className="cake-bottom"></div>

          </div>

          <button className="wish-btn" onClick={makeWish}>
            ✨ Make a Wish ✨
          </button>

        </div>
      )}

      {wishMade && (
        <>
          <div className="cake-section">

            <div className="cake-container">
              <div className="candle"></div>

              <div className="cake-top"></div>
              <div className="cake-bottom"></div>
            </div>

            <h2 className="wish-text">
              🌸 Dear June 🌸
            </h2>

            <p className="message">
              Happy 25th irthday beautiful. 💖
              <br /><br />
              May your days be filled with happiness,
              soft girl dreams, endless laughter,
              beautiful memories, success, love,
              peace and everything your heart desires.
              Happy birthday to my beautiful sister.I dont think words are enough to express how much you mean to me. You are not just my sister but also my best friend, my confidant, and my biggest supporter. I am so grateful to have you in my life, and I cherish every moment we spend together. I wish you all the happiness in the world on your special day and always.
              <br /><br />
              Continue shining, smiling and being
              the amazing woman you are. ✨🌷🩷
            </p>
          </div>

          <h2 className="gallery-title">
            📸 Beautiful Memories
          </h2>

          <div className="gallery">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`June ${index + 1}`}
                className="photo"
              />
            ))}
          </div>

          <div className="song-section">
            <h2>🎵 Happy Birthday Song 🎵</h2>

            <audio controls autoPlay>
              <source
                src="/happybirthday.mp3"
                type="audio/mpeg"
              />
            </audio>

            <p>
              Press play if the song does not start automatically.
            </p>
          </div>
        </>
      )}

    </div>
  );

}
export default App
