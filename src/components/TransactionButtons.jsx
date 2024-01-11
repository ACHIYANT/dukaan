export default function TransactionButton({data,active,handleActive}){
    return (
        <div className={`flex cursor-pointer px-4 py-1.5 items-center gap-2.5 rounded-tranbtn ${active==data.id?'bg-[#146EB4]':'bg-[#E6E6E6]'}`} onClick={()=>handleActive(data.id)}>
            <span className={`text-sm cursor-pointer font-medium text-black50 ${active==data.id?'text-white':'text-black50'}`}>{data.title} ({data.number})</span>
        </div>
    );
}