import React, { useEffect } from 'react';
import crash from "./assets/crash.mp3";
import kick from "./assets/kick.mp3";
import tom from "./assets/tom.mp3";
import snare from "./assets/snare.mp3";
import crashi from "./assets/crash.png"
import kicki from "./assets/kick.png";
import tomi from "./assets/tom.png";
import snarei from "./assets/snare.png";
import "./App.css"

const App = () => {
  const array = [crash, kick, tom, snare];
  const arrayi = [crashi, kicki, tomi, snarei];
  const keyArrays = ['c', 'k', 't', 's'];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyPressed = event.key.toLowerCase();
      const index = keyArrays.indexOf(keyPressed);
      if (index !== -1) {
        const audio = document.getElementsByClassName(keyArrays[index])[0];
        if (audio) {
          audio.play();
          const p = document.createElement('p');
          p.classList.add('bgnone');
          p.innerText = audio.className;
          audio.parentElement.append(p);
          setTimeout(() => {
            p.classList.remove('bgnone');
          }, 500);
        }
      }
    };
    document.addEventListener('keypress', handleKeyPress);
   
  }, [keyArrays]);

  const coll = (event) => {
    event.currentTarget.children[1].play();
  };

  return (
    <div className='box'>
      <div className='left'><h1>Music play in keypress </h1>
      <h1>[k,s,t,c]</h1>
      <h1>Music play in img click</h1></div>
    <div className="right">
      {arrayi.map((item, index) => (
        <div className="div" key={index} onClick={coll}>
          <img src={item} className="img" alt={`Drum ${index}`} />
          <audio src={array[index]} className={keyArrays[index]} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
