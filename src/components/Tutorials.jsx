import question from '/assets/question.svg';
export default function Tutorials() {
  return (
    <div className="flex items-center gap-4 flex-1">
      <h5 className="flex items-center gap-4 text-xl font-medium">Payouts</h5>
      <div className="flex items-center gap-1.5">
        <img src={question} alt="" />
        <span className="text-xs text-[#4D4D4D]">How it works</span>
      </div>
    </div>
  );
}
