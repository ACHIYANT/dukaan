import searchIcon from '../assets/search.svg';
import { useState } from 'react';
export default function Search(){
    const [search,setSearch] = useState('');
    return <div className={`flex w-[400px] px-4  items-center gap-2 shrink-0 self-stretch rounded-md bg-[#F2F2F2]`}>
        <span className='shrink-0 py-[9px]'>
            <img src={searchIcon} alt="" />
        </span>
        <input className='text-smh leading-smh bg-inherit w-full h-full border-none focus:outline-none' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search features, tutorials, etc.'/>
    </div>
}