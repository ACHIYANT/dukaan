import question from "../assets/question.svg";
import chevronRight from "../assets/chevronRight.svg";
import chevronRightWhite from "../assets/chevron-right-white.svg";
import helpWhite from "../assets/help-white.svg";
const currency = "INR";
function currencyFormat(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(value);
}
export default function PayoutCard({ data }) {
  return (
    <>
      {data.isActive ? (
        <div className="flex flex-col h-[154px] relative items-center justify-center flex-1 shadow-cardShadow">
          <div className="flex p-5 h-[154px] flex-col items-start gap-4 self-stretch rounded-lg bg-primaryBlue">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-center gap-2">
                  <span className="text-base text-white">{data.title}</span>
                  <span className="cursor-pointer">
                    <img src={helpWhite} className="text-white" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <span className="text-white text-px32 leading-l38  font-medium">
                  {currencyFormat(data.amount)}
                </span>
                {data.orders > 0 && (
                  <span className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-base text-white underline"
                    >
                      {data.orders} orders
                    </a>
                    <img src={chevronRightWhite} alt="" />
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full py-2 px-6 justify-between items-start rounded-lg bg-hoverBlue absolute right-0 bottom-0">
            <span className="text-black95 font-normal text-sm">Next payout date:</span>
            <span className="text-sm font-medium text-black95">Today, 4:00pm</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-6 flex-1">
          <div className="flex p-5 flex-col items-start gap-4 flex-1 rounded-lg bg-white shadow-cardShadow">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex items-center gap-2">
                <span className="text-base text-black30">{data.title}</span>
                <span className="cursor-pointer">
                  <img src={question} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <span className="text-black12 text-px32 leading-l38 font-medium">
                  {currencyFormat(data.amount)}
                </span>
                {data.orders > 0 && (
                  <span className="flex items-center">
                    <a
                      href="#"
                      className="text-base text-primaryBlue underline"
                    >
                      {data.orders} orders
                    </a>
                    <img src={chevronRight} alt="" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
