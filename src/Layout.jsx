import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { nextSong, prevSong } from "./redux/musicSlice";

function Layout(children) {
  const dispatch = useDispatch();
  const [w,setW] = useState(0)
  const selectedMusic = useSelector((state) => state.music.selected);
  // console.log("selectedMusic", selectedMusic.song);

  function onPlay(){
  
    if(w<=100){
      setW(prev => prev + 1);
      console.log("width",w);
    }
    
  }

  return (
    <div className="h-screen w-screen bg-zinc-900 flex flex-col justify-between">
      <header className="w-full bg-zinc-800 flex justify-between items-center px-5 md:px-10 py-3">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Music Player
        </h1>

        <button className="px-2 py-1  text-md md:text-lg font-medium text-white bg-blue-500 border-2 border-black rounded-lg hover:bg-blue-600 active:translate-y-[1px]">
          Add Music
        </button>
      </header>
      <main className="flex-1 bg-zinc-700 m-1 rounded-lg p-2">
        <section className=" h-full w-full grid grid-cols-2 md:grid-cols-4 items-center ">
          <Outlet />
        </section>
      </main>
      <footer className="self-end w-full bg-zinc-800 h-20 flex items-center justify-center px-10">
        <div className="w-[80%] h-full flex flex-col justify-between py-1">
          <div className="h-[1px] w-full bg-white flex items-center ">
            <div style={{width:`${w}%`}} className="h-[3px]  bg-red-500 "></div>
          </div>
          <section className="flex w-full items-center   mb-1">
            <div className="flex w-64 ">
              <div className="size-14 bg-red-500 border rounded-lg overflow-hidden">
                <img
                  className="size-full object-cover"
                  src={selectedMusic?.image}
                  alt="image"
                />
              </div>
              <div className="ml-3  text-white">
                <p className="font-bold">{selectedMusic?.title}</p>
                <p className="font-medium">{selectedMusic?.singer}</p>
              </div>
            </div>
            <div className="ml-35 py-1 flex items-center justify-center gap-3">
              <button onClick={()=>dispatch(prevSong())} className="hover:cursor-pointer hover:scale-105 drop-shadow-xl shadow-white active:translate-y-[1px]">
                <MdOutlineSkipPrevious size={50} />
              </button>
              <button onClick={()=>onPlay()} className="hover:cursor-pointer hover:scale-105 active:translate-y-[1px]">
                <FaRegPlayCircle size={50} />
              </button>
              {/* <p><FaRegCirclePause size={50} /></p> */}
              <p onClick={()=>dispatch(nextSong())} className="active:translate-y-[1px]">
                <MdOutlineSkipNext size={50} />
              </p>
            </div>
            <div>
              {/* <audio controls>
                <source src={selectedMusic.song} type="audio/mpeg" />
              </audio> */}
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
