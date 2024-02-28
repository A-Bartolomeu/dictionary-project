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

  // Verificar se o arquivo de áudio é .mp3
  const isMP3 = props.phonetic.audio.endsWith(".mp3");

  // Renderizar o componente apenas se houver texto com a fonética e o arquivo for .mp3
  if (props.phonetic.text && isMP3) {
    return (
      <div className="flex flex-auto gap-x-3 items-center mr-4 pb-3 px-4">
        <span className="text-blue-400">{props.phonetic.text}</span>
        <button onClick={toggleAudio} className="text-3xl text-blue-400">
          {isPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark />}
        </button>
        <audio ref={audioRef} src={props.phonetic.audio} />
      </div>
    );
  }

  // Se não houver texto ou o arquivo não for .mp3, retornar null para não renderizar nada
  return null;
}

export default Phonetic;
