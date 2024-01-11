import Tutorials from './Tutorials';
import Search from "./Search";
import More from './More';
export default function Header(){
    return (
        <header className="flex w-[max(100vw-224px,1216px)] px-8 py-3 items-center gap-4 border-0 border-b border-[#D9D9D9]">
            <Tutorials/>
            <Search/>
            <More/>
        </header>
    );
}