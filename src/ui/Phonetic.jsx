import React, { useState, useEffect } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

function Phonetic(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    // Armazenar o valor de audioRef.current em uma variável local
    const currentAudioRef = audioRef.current;

    if (currentAudioRef) {
      currentAudioRef.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (currentAudioRef) {
        currentAudioRef.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, []);

  return (
    <div className="flex flex-auto gap-x-3 items-center">
      <span className="text-blue-400">{props.phonetic.text}</span>
      <button onClick={toggleAudio} className="text-3xl text-blue-400">
        {isPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark />}
      </button>
      <audio ref={audioRef} src={props.phonetic.audio} />
    </div>
  );
}

export default Phonetic;
