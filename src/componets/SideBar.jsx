import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
   const nav = useNavigate();
    return (
        <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
            {/* Top section */}
            <div  className="bg-[#121212] h-[15%] rounded flex flex-col justify-around cursor-pointer">
                <div onClick={() =>  nav("/") } className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.home_icon} alt="Home" />
                    <p className="font-bold">Home</p>
                </div>

                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="Search" />
                    <p className="font-bold">Search</p>
                </div>
            </div>

            {/* Bottom section */}
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.stack_icon} alt="Library" />
                    <p className="font-bold">Your Library</p>
                    <div className="flex items-center gap-3 ml-auto pr-4">
                        <img src={assets.arrow_icon} className="w-6" alt="Arrow" />
                        <img src={assets.plus_icon} className="w-6" alt="Plus" />
                    </div>
                </div>

                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create your first playlist</h1>
                    <p className="font-light text-sm">It's easy, we'll help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                        Create Playlist
                    </button>
                </div>

                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Find some Podcast to follow</h1>
                    <p className="font-light text-sm">we'll keep you update on new episodes</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                     Browse Podcasts 
                     </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
