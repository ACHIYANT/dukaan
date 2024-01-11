import Dropdown from "./Dropdown"
import Payouts from "./Payouts"
import Transactions from "./Transactions"

export default function Main(){
    return <div className="flex width p-8 pb-0 w-[max(100vw-224px,1216px)] flex-col items-start gap-8 bg-black98">
        <Overview/>
        <Transactions/>
    </div>
}
function Overview(){
    return <div className="flex flex-col items-start self-stretch gap-6 ">
        <div className="flex justify-between items-center self-stretch">
            <span className="text-black12 text-xl font-medium">Overview</span>
            <Dropdown listItems={['This Month','This Quater','This Year']} defaultValue={'This Month'}/>
        </div>
        <Payouts/>
    </div>
}