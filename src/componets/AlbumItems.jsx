import React, { use } from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumItems(props){
   
     const nav = useNavigate();

    return(

        <div  onClick={() => nav(`/album/${props.id}`)}  className="min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffff26]">
        <img className='rounded' src={props.image} alt="" />
        <p className="font-bold mt-2 mb-1">{props.name}</p>
        <p className="text-sm text-slate-200">{props.desc}</p>
        </div>
    )
}