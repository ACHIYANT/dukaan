export default function DataCol({ children,isLast}) {
  return (
    <div className={`flex w-[180px] flex-col justify-center items-start   bg-white`}>
      <div className={`flex items-center gap-4 ${isLast?'self-end':''}`}>
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-center items-start gap-0.5">
            <div className="flex items-center gap-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
