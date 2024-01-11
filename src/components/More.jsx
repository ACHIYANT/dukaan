import chevron from "../assets/chevronDownGrey.svg";
import announce from "../assets/announce.svg";
export default function More(){
    return <div className="flex justify-end items-start gap-2 flex-1">
        <div className="flex items-start gap-3">
            <span className="cursor-pointer"><img src={announce} alt="" /></span>
            <span className="cursor-pointer"><img src={chevron} alt="" /></span>
        </div>
    </div>
}