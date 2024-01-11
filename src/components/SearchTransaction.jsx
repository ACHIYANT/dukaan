import { useState } from "react";
import searchIcon from "/assets/search.svg";
export default function SearchTransaction(){
    const[search,setSearch] = useState('');
    return (
        <div className={`flex w-[248px] h-[40px] items-start`}>
            <div className="flex py-2.5 px-4 items-center gap-2 flex-1 rounded border border-[black85] bg-white">
                <img src={searchIcon} alt="" />
                <input className='text-sm text-black60 flex-1 leading-smh bg-inherit w-full h-full border-none focus:outline-none' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Order ID or transaction ID'/>
            </div>
        </div>
    );
}