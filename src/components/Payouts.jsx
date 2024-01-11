import PayoutCard from "./PayoutCard";
const payoutData = [
    {
        id:1,
        title: 'Next Payout',
        amount: 2312.23,
        orders: 23,
        isActive:true,
    },
    {
        id:2,
        title: 'Amount Pending',
        amount: 92312.20,
        orders: 13,
        isActive:false,
    },
    {
        id:3,
        title: 'Amount Processed',
        amount: 2392313.19,
        orders: 0,
        isActive:false,
    },
    
]
export default function Payouts() {
  return (
    <div className="flex items-start gap-5 self-stretch">
        {payoutData.map((data)=><PayoutCard data={data} key={data.id}/>)}
    </div>
  );
}
