export default function RowHeader({title,isLast}){
    return (
        <div className="flex w-[180px] flex-col jutify-between items-start gap-[-1px] shrink-0">
            <span className={`${isLast?'self-end':''}`}>{title}</span>
        </div>
    );
}