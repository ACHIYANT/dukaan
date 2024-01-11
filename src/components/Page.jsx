export default function Page({page}){
    return <div className="flex w-[208px] py-2 px-4 items-start gap-3 rounded">
        <span className="shrink-0">

        <img src={`/src/assets/${page.title.toLowerCase()}.png`} className="h-5 w-5 opacity-80" alt="" />
        </span>
        <span className="text-sm opacity-80">{page.title}</span>
    </div>
}