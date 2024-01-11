import Page from "./Page";
const pagesData = [
    {
        id:1,
        title:'Home',
        icon: '../assets/home.png',
    },
    {
        id:2,
        title:'Orders',
    },
    {
        id:3,
        title:'Products',
    },
    {
        id:4,
        title:'Delivery',
    },
    {
        id:5,
        title:'Marketing',
    },
    {
        id:6,
        title:'Analytics',
    },
    {
        id:7,
        title:'Payouts',
    },
    {
        id:8,
        title:'Discounts',
    },
    {
        id:9,
        title:'Audience',
    },
    {
        id:10,
        title:'Appearance',
    },
    {
        id:11,
        title:'Plugins',
    },
]
export default function Pages(){
    return(
        <div className="flex flex-col items-start gap-1 flex-1">
            {pagesData.map((page)=><Page page={page} key={page.id}/>)}
        </div>
    );
}