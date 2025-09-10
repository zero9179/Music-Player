import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { nextSong, prevSong } from "./redux/musicSlice";

function Layout() {
  const dispatch = useDispatch();
  const selectedMusic = useSelector((state) => state.music.selected);
  console.log(selectedMusic)

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [selectedMusic]);

  function handlePlayPause() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    }
  }

  function handleSeek(e) {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;

    audio.currentTime = newTime;
  }

  function handleNext() {
    dispatch(nextSong());
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 200);
  }

  function handlePrev() {
    dispatch(prevSong());
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 200);
  }

  function handleEnded() {
    handleNext();
  }

  return (
    <div className="min-h-screen w-screen bg-zinc-900 flex flex-col">
      {/* Header */}
      <header className="w-full bg-zinc-800 flex justify-between items-center px-4 md:px-10 py-3 flex-shrink-0">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
          Music Player
        </h1>
        <button className="px-2 py-1 text-xs sm:text-md md:text-lg font-medium text-white bg-blue-500 border-2 border-black rounded-lg hover:bg-blue-600 active:translate-y-[1px]">
          Add Music
        </button>
      </header>

      {/* Main scrollable content */}
      <main className="flex-1 overflow-auto m-1 rounded-lg p-2">
        <section className="h-full w-full">
          <Outlet />
        </section>
      </main>

      {/* Fixed Footer (Player) */}
      <footer className="fixed bottom-0 left-0 w-full bg-zinc-800 h-fit sm:h-20 flex items-center justify-center px-3 sm:px-6 md:px-10 z-50">
        <div className="w-full sm:w-[90%] h-full flex flex-col justify-center gap-2 sm:gap-3">
          {/* Progress bar */}
          <div
            className="h-[4px] sm:h-[6px] w-full bg-gray-600 cursor-pointer relative rounded-full"
            onClick={handleSeek}
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-red-500 rounded-full absolute top-0 left-0 transition-all"
            ></div>
          </div>

          {/* Controls */}
          <section className="flex items-center justify-between md:justify-start mb-2">
            {/* Song info */}
            {selectedMusic.title && (
              <div className="flex items-center w-full sm:w-auto gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 border rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedMusic?.image}
                    alt="cover"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <p className="font-bold text-sm sm:text-base text-white truncate">
                    {selectedMusic?.title || "No song selected"}
                  </p>
                  <p className="font-medium text-xs sm:text-sm text-gray-200 truncate">
                    {selectedMusic?.singer || ""}
                  </p>
                </div>
              </div>
            )}
            {/* Buttons */}
            <div className=" md:m-auto flex items-center justify-center gap-4  mt-1 sm:mt-0">
              <button onClick={handlePrev}>
                <MdOutlineSkipPrevious className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>

              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <FaRegPauseCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                ) : (
                  <FaRegPlayCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                )}
              </button>

              <button onClick={handleNext}>
                <MdOutlineSkipNext className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>
            </div>
          </section>

          {/* Hidden audio */}
          <audio
            ref={audioRef}
            key={selectedMusic?.id}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          >
            <source src={selectedMusic?.song} type="audio/mpeg" />
          </audio>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
