import TransactionButtons from "./TransactionButtons";
import { useState } from "react";
import sort from '../assets/Sort.svg';
import download from '../assets/download.svg';
import SearchTransaction from "./SearchTransaction";
import RowHeader from "./RowHeader";
import DataDisplay from "./DataDisplay";
const transData = [
    {
        id:1,
        title:'Payouts',
        number: 22
    },
    {
        id:2,
        title:'Refunds',
        number: 6
    }
]
const rowHeader = [
    {
        id:1,
        title:'Order Id'
    },
    {
        id:2,
        title:'Status'
    },
    {
        id:3,
        title:'Transaction ID'
    },
    {
        id:4,
        title:'Refund Date'
    },
    {
        id:5,
        title:'Order Amount'
    }
    
];
const dataTable = [
    {
        orderId:281209,
        status: 'Successful',
        transactionId: 131634495747,
        date: 'Today, 08:45 PM',
        amount: 1125.00,
    },
    {
        orderId:281208,
        status: 'Processing',
        transactionId: 131634495747,
        date: 'Yesterday, 03:00 PM',
        amount: 1125.00,
    },
    {
        orderId:281207,
        status: 'Successful',
        transactionId: 131634495747,
        date: '12 Jul 2023, 03:00 PM',
        amount: 1125.00,
    },
    {
        orderId:281206,
        status: 'Successful',
        transactionId: 131634495747,
        date: '12 Jul 2023, 03:00 PM',
        amount: 1125.00,
    },
    {
        orderId:281205,
        status: 'Successful',
        transactionId: 131634495747,
        date: '12 Jul 2023, 03:00 PM',
        amount: 1125.00,
    },
    {
        orderId:281204,
        status: 'Successful',
        transactionId: 131634495747,
        date: '12 Jul 2023, 03:00 PM',
        amount: 1125.00,
    },
];
export default function Transactions(){
    const [active,setActive] = useState(2);
    function handleActive(id){
        setActive(id);
    }
    return(
        <div className="flex flex-col items-start self-stretch gap-6 overflow-hidden">
            <div className="flex flex-col items-start gap-6">
                <span className="text-black12 text-xl font-medium">Transactions | This Month</span>
                <div className="flex items-start gap-3">
                    {transData.map((data)=><TransactionButtons data={data} key={data.id} handleActive={handleActive} active={active}/>)}
                </div>
            </div>
            <div className="flex w-full pt-3 px-3 pb-2 flex-col rounded-lg bg-white shadow-cardShadow">
                <div className="flex flex-col items-end gap-3">
                    <div className="flex justify-between items-center self-stretch">
                        <SearchTransaction/>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-end gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex py-1.5 px-3 items-center gap-1.5 rounded border border-[black85] bg-white">
                                        <span className="text-base">Sort</span>
                                        <img src={sort} alt="" />
                                    </div>
                                </div>
                                <span className="w-[36px] h-[36px] flex items-center justify-center shrink-0 rounded border border-[#D9D9D9]">
                                    <img src={download} className="w-[20px] h-[20px] shrink-0"  alt="" />
                                </span>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full py-2.5 px-3 justify-between items-center rounded bg-black95">
                        {rowHeader.map((header)=><RowHeader key={header.id} isLast={rowHeader.length == header.id} title={header.title}/>)}
                    </div>
                </div>
                {dataTable.map((data)=><DataDisplay key={data.orderId} data={data}/>)}
            </div>
        </div>
    );
}