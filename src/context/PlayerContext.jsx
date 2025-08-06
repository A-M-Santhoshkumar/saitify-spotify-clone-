// src/context/PlayerContext.jsx
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [volume, setVolume] = useState(1); // Default full volume
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: "--", minute: "--" },
    totalTime: { second: "--", minute: "--" },
  });

  // Set audio time updates
  useEffect(() => {
    const updateTime = () => {
      const audio = audioRef.current;
      if (!audio || !audio.duration) return;

      const current = audio.currentTime;
      const total = audio.duration;

      seekBar.current.style.width = `${(current / total) * 100}%`;

      setTime({
        currentTime: {
          second: String(Math.floor(current % 60)).padStart(2, "0"),
          minute: String(Math.floor(current / 60)).padStart(2, "0"),
        },
        totalTime: {
          second: String(Math.floor(total % 60)).padStart(2, "0"),
          minute: String(Math.floor(total / 60)).padStart(2, "0"),
        },
      });
    };

    const interval = setInterval(() => {
      if (audioRef.current) {
        updateTime();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Apply volume to audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    setTrack(songsData[id]);
    setTimeout(() => {
      audioRef.current.play();
      setPlayStatus(true);
    }, 100);
  };

  const before = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setTimeout(() => {
        audioRef.current.play();
        setPlayStatus(true);
      }, 100);
    }
  };

  const after = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setTimeout(() => {
        audioRef.current.play();
        setPlayStatus(true);
      }, 100);
    }
  };

  const seekBgClick = (e) => {
    const seekWidth = seekBg.current.offsetWidth;
    const offsetX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (offsetX / seekWidth) * duration;
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    playStatus,
    time,
    setTrack,
    setPlayStatus,
    setTime,
    play,
    pause,
    playWithId,
    before,
    after,
    seekBgClick,
    volume,
    setVolume,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      {/* ✅ Audio element here, not inside return JSX of component */}
      <audio ref={audioRef} src={track.file}></audio>
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
