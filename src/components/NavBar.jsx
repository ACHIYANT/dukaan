import companyLogo from "../assets/nishyan.png";
import chevronDown from "../assets/chevron.svg";
import Pages from "./Pages";
export default function NavBar() {
  return (
    <section className=" text-white bg-secondary  h-[100vh] inline-flex flex-col items-start shrink-0">
      <div className="flex flex-col w-[224px] py-4 px-2.5 flex-1 gap-4 items-center">
        <NavTop />
        <NavBottom />
      </div>
    </section>
  );
}
function NavTop() {
  return (
    <div className="h-[780px] flex flex-col gap-6 flex-1 items-center">
      <Company />
      <Pages />
    </div>
  );
}
function Company() {
  return (
    <div className="flex gap-3 w-[192px]  items-center">
      <span className="w-10 h-10 shrink-0 rounded">
        <img src={companyLogo} alt="" className="w-[39px] h-[39px] rounded" />
      </span>
      <span className="flex-1 flex flex-col justify-center items-start gap-1">
        <span className="font-medium text-smh leading-smh">Nishyan</span>
        <a href="#" className="text-xsl leading-4 opacity-80 underline">
          Visit store
        </a>
      </span>
      <span className="shrink-0">
        <img src={chevronDown} className="h-5 w-5" alt="" />
      </span>
    </div>
  );
}
function NavBottom() {
  return (
    <div className=" w-[192px] mx-auto bg-secondaryCredits py-1.5 px-3 rounded flex flex-col items-start gap-2.5">
      <div className="flex items-center gap-3">
        <span className="flex p-1.5 gap-2.5 rounded bg-[#FFFFFF1A] items-start">
          <img src="/src/assets/wallet.png" alt="" className="h-6 w-6" />
        </span>
        <span className="flex flex-col gap-0.5 items-start">
          <span className="text-xsl leading-4 opacity-80 font-normal">
            Available credits
          </span>
          <span className="text-base font-medium">222.10</span>
        </span>
      </div>
    </div>
  );
}
